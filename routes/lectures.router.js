const { Router } = require('express');
const LecturesModel = require('../db/models/lecturesModel');
const CourseModel = require('../db/models/courseModel');

const router = Router();

router.get('/:id', async (req, res) => {
  const currentCourses = await CourseModel.findById(req.params.id);
  const currentLecture = await LecturesModel.findById(req.params.id);
  let allLectures={} 
  let vlink = '';
  
  if (currentCourses){
    allLectures = await CourseModel.findById(req.params.id).populate('lecturesId').lean();
  }
  if (currentLecture){
    console.log("currentLecture====",currentLecture);
    if (currentLecture.videoLink !== '') {
      vlink = currentLecture.videoLink;
    }
  }
  console.log("allLectures-*/*-",allLectures);
  res.render('lectures', { currentCourses, vlink , allLectures});
});

// router.get('/:id', async (req, res) => {
//   const currentLecture = await LecturesModel.findById(req.params.id);
//   let vlink = '';
//   if (currentLecture.videoLink !== '') {
//     vlink = currentLecture.videoLink;
//   }
//   console.log(vlink);
//   res.render('lectures', { currentLecture, vlink });
// });



module.exports = router;
