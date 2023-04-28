const express = require("express");
const app = express();
// const express = require('express');
// const app = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("포트열렸다");
});

//신규추가부분 : dev branch 기준
require("dotenv").config({ path: "./.env" });
const path = require("path");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportConfig = require("./src/config/passport");
const DB_URI = process.env.DB_URI;
const COOKIE_SECRET = process.env.COOKIE_SECRET;

// html 정적파일
const pagesPath = path.join(__dirname, "../front-end/pages");
const loginRouter = require("./src/routes/loginRouter");
const signupRouter = require("./src/routes/signupRouter");
const mypageRouter = require("./src/routes/mypageRouter");
const checkoutRouter = require("./src/routes/checkoutRouter");
const itemRouter = require("./src/routes/items");
const reviewRouter = require("./src/routes/reviews");
// const userRouter = require('./src/routes/userRouter');

app.use(express.static(pagesPath));
app.use(bodyParser.json());
app.use(
  session({
    secret: COOKIE_SECRET, //암호화 키
    resave: false, //세션 저장 시점
    saveUninitialized: true, //세션 저장 전 uninitialized 상태로 저장
    store: MongoStore.create({
      //세션정보 DB에 저장
      mongoUrl: DB_URI,
    }),
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

passportConfig(""); //상세기능 확인필요

app.use("/login", loginRouter);
app.use("/signUp", signupRouter);
app.use("/mypage", mypageRouter);
app.use("/", itemRouter);
app.use("/checkout", checkoutRouter);
app.use("/productReview", reviewRouter);
