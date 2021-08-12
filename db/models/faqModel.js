const { Schema, model } = require("mongoose");

const faqSchema = new Schema({
  title: { type: String },
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports = model("Faq", faqSchema);
