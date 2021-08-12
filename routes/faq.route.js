const { Router } = require('express');
// const faqModel = require('../db/models/faqmodel'); // как пишется файл?

const router = Router();

router.get('/', (req, res) => {
  res.render('faq');
});

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  // const currentFaq = await faqModel.findById(id);
  // console.log(currentFaq);
  // return res.json({ currentFaq });
});

module.exports = router;
