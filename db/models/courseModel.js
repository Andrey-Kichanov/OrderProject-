const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  lecturesId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lectures",
      required: true,
    },
  ],
  teacher: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = model("Course", courseSchema);
