const mongoose = require("mongoose");
const { Schema } = mongoose;

const storySchema = new Schema({
  title: String,
  body: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("stories", storySchema);
