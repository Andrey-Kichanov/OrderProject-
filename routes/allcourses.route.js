const { Router } = require('express');
const CourseModel = require('../db/models/courseModel');

const router = Router();

router.get('/', async (req, res) => {
  const allCourses = await CourseModel.find();

  res.render('allcourse', { allCourses });
});

module.exports = router;
