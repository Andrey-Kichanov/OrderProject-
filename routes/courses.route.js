const { Router } = require('express');
const CourseModel = require('../db/models/courseModel');

const router = Router();

router
  .route('/:id')
  .get(async (req, res) => {
    const allCourses = await CourseModel.find();
    const currentCourse = await CourseModel.findById(req.params.id).populate('lecturesId').lean();

    res.render('course', { currentCourse, allCourses });
  });




  
module.exports = router;
