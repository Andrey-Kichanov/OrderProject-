/* eslint-disable quotes */
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  req.session.destroy();
  res.clearCookie("sid");
  res.redirect("/");
});

module.exports = router;
