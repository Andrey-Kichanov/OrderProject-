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
    console.log(req.body);
    try {
      const { valueName, valuePass, valueEmail } = req.body;

      const newUser = await User.findOne({ valueEmail });
      if (newUser) {
        return res.redirect("/registration/?error=alreadyRegistr");
      }
      const user = await User.create({ name: valueName, password: valuePass, email: valueEmail });

      req.session.user = user;
      res.json(user);
    } catch (error) {
      console.log(error);
      res.sendStatus(418);
    }
  });

module.exports = router;
