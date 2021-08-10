/* eslint-disable consistent-return */
/* eslint-disable quotes */
const express = require("express");
const User = require("../db/models/userModel");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    let errorDescription = "";
    const { error } = req.query;
    if (error === "alreadyRegistr") {
      errorDescription = "Такой email уже занят";
    }
    res.render("registration", { errorDescription });
  })
  .post(async (req, res) => {
    try {
      const { userName, password, email } = req.body;
      const newUser = await User.findOne({ email });
      if (newUser) {
        return res.redirect("/registration/?error=alreadyRegistr");
      }
      const user = await User.create({ userName, password, email });

      req.session.user = user;
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.sendStatus(418);
    }
  });

module.exports = router;
