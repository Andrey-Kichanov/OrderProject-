const { Router } = require('express');
const CourseModel = require('../db/models/courseModel');
const router = Router();

router.get('/', async (req, res) => {
  const allCourses = await CourseModel.find()

  res.render('allcourse', { allCourses });
});

// router.post('/:id', async (req, res) => {
//   const { id } = req.params;
//   const currentLectures = await LecturesModel.findById(id);

//   return res.json({ currentLectures });
// });

module.exports = router;
