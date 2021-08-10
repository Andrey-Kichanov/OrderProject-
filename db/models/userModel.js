const { Schema, model, pluralize } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    uniq: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model("User", userSchema);
