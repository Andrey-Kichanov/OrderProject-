const { Router } = require('express');
const PartnerModel = require('../db/models/partnerModel');

const router = Router();

router.get('/', async (req, res) => {
  const partners = await PartnerModel.find();
  res.render('partners', { partners });
});

module.exports = router;
