const mongoose = require("mongoose");
const { Schema } = mongoose;

const storySchema = new Schema({
  title: String,
  body: String
});

mongoose.model("stories", storySchema);
