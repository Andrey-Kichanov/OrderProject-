const { Router } = require('express');
const LecturesModel = require('../db/models/lecturesModel');

const router = Router();

router.get('/:id', async (req, res) => {
  const currentLecture = await LecturesModel.findById(req.params.id);
  console.log(currentLecture);
  res.render('lectures', { currentLecture });
});
module.exports = router;
