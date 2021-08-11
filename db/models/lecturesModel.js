const { Schema, model } = require('mongoose');

const lecturesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pictureLink: {
    type: String,
    required: true,
  },
  // audioLink: {
  //     type: String,
  //     required: true,
  // },
  // videoLink: {
  //     type: String,
  // },
});

module.exports = model('Lecture', lecturesSchema);
