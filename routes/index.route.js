const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('main');
});

module.exports = router;
