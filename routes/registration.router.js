/* eslint-disable consistent-return */
/* eslint-disable quotes */
const express = require("express");
const User = require("../db/models/userModel");

const router = express.Router();

router
  .route("/")
  .post(async (req, res) => {
    // console.log(req.body);
    try {
      const { valueName, valuePass, valueEmail } = req.body;

      const newUser = await User.findOne({ email: valueEmail });
      console.log(newUser);
      if (newUser) {
        const error = { message: 'Такой пользователь уже найден' };
        return res.json(error);
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
