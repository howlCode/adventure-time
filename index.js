const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./models/Story");
require("./services/passport");

mongoose.connect(
  keys.mongoURI,
  {
    useNewUrlParser: true
  }
);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/storyRoutes")(app);

const test_stories = [
  {
    id: 1,
    title: "There Was An Old Lady Who Swallowed a Fly",
    body:
      "Once upon a time there was an old lady who decided to swallow a fly.",
    user: "tester101",
    arcs: [
      {
        id: 1,
        user: "frankie",
        body: "Why oh why did she swallow the fly."
      },
      {
        id: 2,
        user: "storyguy",
        body: "Perhaps she'll die"
      }
    ]
  },
  {
    id: 2,
    title: "once upon a time in a mexican villa",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user: "tester1",
    arcs: [
      {
        id: 1,
        user: "bigwrites",
        body: "there was a lovely person."
      },
      {
        id: 2,
        user: "frankey",
        body: "who loved cake."
      },
      {
        id: 3,
        user: "tom",
        body: "and coronoa light."
      }
    ]
  }
];
app.use("/api/stories", (req, res) => {
  res.send(test_stories);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
