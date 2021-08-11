const { Router } = require("express");

const router = Router();
const fs = require("fs").promises;

router.get("/", async (req, res) => {
  const aboute = await fs.readFile(
    "./public/aboutCompany.txt",
    "utf-8",
    (data) => {
      console.log(data);
    }
  );
  console.log(aboute);
  res.render("aboute", { aboute });
});

module.exports = router;
