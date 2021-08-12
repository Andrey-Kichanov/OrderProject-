const { Router } = require('express');
const CourseModel = require('../db/models/courseModel');
require('../db/models/lecturesModel');

const router = Router();

router.get('/', async (req, res) => {
  const allTitle = await CourseModel.find().populate('lecturesId').lean();
  res.locals.title = allTitle;
  res.render('main', { allTitle });
});

module.exports = router;
