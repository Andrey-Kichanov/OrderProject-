/* eslint-disable consistent-return */
/* eslint-disable quotes */
const { Router } = require("express");

const User = require("../db/models/userModel");

const router = Router();

router
  .route("/")
  .get((req, res) => {
    let errorDiscription = "";
    const { error } = req.query;
    console.log(error);
    if (error === "UserNotFound") {
      errorDiscription = "Пользователь не найден, зарегистрируйтесь";
    }
    if (error === "incorrectPassword") {
      errorDiscription = "Вы ввели неправильный пароль";
      console.log(errorDiscription);
    }
    res.render("auth", { errorDiscription });
  })
  .post(async (req, res) => {
    try {
      const { email, password } = req.body;
      const checkedUser = await User.findOne({ email });

      if (!checkedUser) {
        return res.redirect("/login/?error=UserNotFound");
      }
      if (checkedUser.password !== password) {
        return res.redirect("/login/?error=incorrectPassword");
      }

      req.session.user = checkedUser;
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.sendStatus(418);
    }
  });

module.exports = router;
