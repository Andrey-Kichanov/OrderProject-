const { Router } = require('express');
const CourseModel = require('../db/models/courseModel');

const router = Router();

router.get('/', async (req, res) => {
  const allCourses = await CourseModel.find();
  const allTitle = await CourseModel.find().populate('lecturesId');
  console.log(allTitle);
  res.render('main', { allCourses });
});

module.exports = router;
