const { Router } = require('express');
const LecturesModel = require('../db/models/lecturesModel');

const router = Router();

router.get('/:id', async (req, res) => {
  const currentLecture = await LecturesModel.findById(req.params.id);
  let vlink = '';
  if (currentLecture.videoLink !== '') {
    vlink = currentLecture.videoLink;
  }
  console.log(vlink);
  res.render('lectures', { currentLecture, vlink });
});
module.exports = router;
