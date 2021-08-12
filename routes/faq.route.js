const { Router } = require('express');
const faqModel = require('../db/models/faqModel'); // как пишется файл?

const router = Router();

router.get('/', async (req, res) => {
  const allModel = await faqModel.find();
  res.render('faq', {allModel});
});

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const currentFaq = await faqModel.findById(id);
  console.log(currentFaq);
  return res.json({ currentFaq });
});

module.exports = router;
