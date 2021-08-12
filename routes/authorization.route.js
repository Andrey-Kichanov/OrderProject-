/* eslint-disable consistent-return */
/* eslint-disable quotes */
const { Router } = require("express");

const User = require("../db/models/userModel");

const router = Router();

router
  .route("/")
  .post(async (req, res) => {
    try {
      const { emailValue, passValue } = req.body;
      const checkedUser = await User.findOne({ email: emailValue, password: passValue });
      console.log(checkedUser)
      if (!checkedUser) {
        const message = 'Пользователдь не найден, зарегистрируйтесь';
        return res.send(message);
      }
      if (checkedUser.password !== passValue) {
        return res.redirect("/login/?error=incorrectPassword");
      }

      req.session.user = checkedUser;
      return res.json({ enter: true });
    } catch (error) {
      console.log(error);
      res.sendStatus(418);
    }
  });

module.exports = router;
