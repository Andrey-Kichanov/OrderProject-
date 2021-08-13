const { Router } = require('express');
const LecturesModel = require('../db/models/lecturesModel');
const CourseModel = require('../db/models/courseModel');

const router = Router();

router.get('/:id', async (req, res) => {
  const currentCourses = await CourseModel.findById(req.params.id);
  const currentLecture = await LecturesModel.findById(req.params.id);
  let allLectures = {};
  let vlink = '';

  if (currentCourses) {
    allLectures = await CourseModel.findById(req.params.id).populate('lecturesId').lean();
  }
  if (currentLecture) {
    console.log('currentLecture====', currentLecture);
    if (currentLecture.videoLink !== '') {
      vlink = currentLecture.videoLink;
    }
  }
  console.log('allLectures-*/*-', allLectures);
  res.render('lectures', { currentCourses, vlink, allLectures });
});

module.exports = router;

router.get('/:id/lesson/:lessonId', async (req, res) => {
  // const currentCourses = await CourseModel.findById(req.params.id);
  const currentLecture = await LecturesModel.findById(req.params.lessonId);

  res.json(currentLecture);
});
