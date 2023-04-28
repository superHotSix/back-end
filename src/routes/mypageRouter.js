const { User } = require("../models");

const express = require("express");
const router = express.Router();

// const { loginRequired } = require('../middlewares/loginRequired');

const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const asyncHandler = require("../utils/asyncHandler");

const mypagePath = path.join(__dirname, "../../../front-end/pages/myPage");

router.use(express.json());
router.use(express.static(mypagePath));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// 마이페이지 조회
router.get("/", (req, res) => {
  res.sendFile(mypagePath + "/myPage.html");
});

// 마이페이지 수정 put
router.put(
  "/",
  asyncHandler(async (req, res) => {
    updateUser(
      req.body.userEmail,
      req.body.userName,
      req.body.userPassword,
      req.body.userAddress,
      req.body.userPhone
    );
    async function updateUser(
      userEmail,
      newName,
      newPassword,
      newAddress,
      newPhone
    ) {
      try {
        const updateUser = await User.updateOne(
          { userEmail },
          {
            userName: newName,
            userPassword: newPassword,
            userAddress: newAddress,
            userPhone: newPhone,
          }
        );
        res.status(200).json({
          message: "회원정보 수정 성공",
          data: updateUser,
        });
      } catch (err) {
        console.error(err);
        throw new Error("회원정보 수정 실패");
      }
    }
  })
);

// 주문내역 조회
router.get("/", async (req, res) => {
  findOder(req.body.orderNo);
  async function findOder(reqOrderNo) {
    try {
      if (!findOrder) {
        const resOrder = await Order.find({ orderNo: reqOrderNo });
        res.status(200).json({
          message: "주문정보 조회 성공",
          data: resOrder,
        });
      }
    } catch (err) {
      console.error(err);
      throw new Error("주문정보 조회 실패");
    }
  }
});

// module.exports = { signUp, logIn, logOut, getUserInfo, updateUser };
module.exports = router;
