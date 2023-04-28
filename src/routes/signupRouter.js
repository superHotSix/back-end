const express = require("express");
const router = express.Router();

const passport = require("passport");
const bodyParser = require("body-parser");
const path = require("path");
const asyncHandler = require("../utils/asyncHandler");
const signupPath = path.join(__dirname, "../../../front-end/pages/signUpForm");
const hashPassword = require("../utils/hashPassword");

const { User } = require("../models");

router.use(express.static(signupPath));

// router.get("/", (req, res) => {
//   res.sendFile(signupPath + "/signUpForm.html");
// });

//회원가입
router.post(
  "/",
  asyncHandler(async (req, res) => {
    try {
      console.log("여기여기");

      const reqUser = req.body.userEmail;
      console.log(reqUser);
      const findUser = await User.findOne({ userEmail: reqUser });

      if (findUser === reqUser) {
        //이메일 중복 확인
        res.send("회원가입 실패");
      }

      if (!findUser) {
        const { userEmail, userName, userPassword, userPhone, userAddress } =
          req.body;
        const hashedPassword = hashPassword(userPassword); // 비밀번호 해쉬값 만들기
        const user = await User.create({
          userEmail,
          userName,
          userPassword: hashedPassword,
          userPhone,
          userAddress,
        }); // 회원 생성

        console.log("신규 회원", user);
        res.status(201).json({ message: "회원가입 성공" });
        // res.redirect('/');
      }
    } catch (error) {
      console.log(error);
      // res.status(404).json({ message: '회원가입 실패' });
      res.send("회원가입 실패");
    }
  })
);

module.exports = router;
