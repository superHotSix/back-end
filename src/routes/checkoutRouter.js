const { Order } = require("../models");

const express = require("express");
const router = express.Router();

const path = require("path");
const bodyParser = require("body-parser");
const asyncHandler = require("../utils/asyncHandler");

const checkoutPath = path.join(
  __dirname,
  "../../../front-end/pages/checkoutPage"
);

router.use(express.json());
router.use(express.static(checkoutPath));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// 최초 주문 레이아웃 조회
// router.get('/', (req, res) => {
//     res.sendFile( checkoutPath + '/checkoutPage.html' )
// });

// 주문생성
router.post(
  "/",
  asyncHandler(async (req, res) => {
    console.log("여기여기");

    try {
      for (let i = 0; i < req.body.length; i++) {
        orderData = [
          {
            productName: req.body[i].productName,
            productPrice: req.body[i].productPrice,
            productQuantity: req.body[i].productQuantity,
            totalPrice: req.body[i].totalPrice,
            userName: req.body[i].userName,
            userEmail: req.body[i].userEmail,
            userPhone: req.body[i].userPhone,
            userAddress: req.body[i].userAddress,
            orderPassword: req.body[i].orderPassword,
          },
        ];
        orderCreate(orderData);
      }
      res.status(201).json({ message: "주문성공" });
    } catch (err) {
      throw new Error("Err");
    }

    async function orderCreate(orderData) {
      const newOrder = await Order.create(orderData); // 주문생성

      console.log("신규 주문", newOrder);
    }
  })
);

// module.exports = { signUp, logIn, logOut, getUserInfo, updateUser };
module.exports = router;
