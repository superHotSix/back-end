const express = require("express");
const router = express.Router();

const passport = require("passport");
const bodyParser = require("body-parser");
const path = require("path");
const loginPath = path.join(__dirname, "../../../front-end/pages/loginPage");

const { User } = require("../models");
const hashPassword = require("../utils/hashPassword");

router.use(bodyParser.json());
router.use(express.static(loginPath));

router.get("/", (req, res) => {
  res.sendFile(loginPath + "/loginPage.html");
});

router.post("/", async (req, res) => {
  try {
    const reqUser = req.body.userEmail;
    const findUser = await User.findOne({ userEmail: reqUser });
    if (findUser.userPassword === hashPassword(req.body.userPassword)) {
      res.status(201).json({
        message: "로그인 성공",
        data: findUser,
      });
    } else {
      res.status(404).json({
        message: "로그인 실패",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "서버 에러",
    });
  }
});

// 로그아웃
router.get("/logout", (req, res) => {
  try {
    res.clearCookie("token.refreshToken");
    res.status(200).json({ message: "로그아웃 성공" });
  } catch (err) {
    console.error(err);
    alert(err);
  }
  // req.flash('success_msg', '로그아웃 되었습니다!');
});

module.exports = router;
