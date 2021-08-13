const { Router } = require('express');
const CourseModel = require('../db/models/courseModel');
const LecturesModel = require('../db/models/lecturesModel');
const router = Router();

router.get('/', async (req, res) => {
  const allLectures = await CourseModel.find().populate('lecturesId').lean();

  res.render('courses', { allLectures });
});

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const currentLectures = await LecturesModel.findById(id);

  return res.json({ currentLectures });
});

module.exports = router;
