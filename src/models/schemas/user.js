const { Schema } = require("mongoose");
const shortId = require("./types/shortId");
// const moment = require('moment');
// moment.tz.setDefault('Asia/Seoul');
// const krTimeDiff = 9 * 60 * 60 * 1000;

const userDefaultType = "user";
const imageSchema = new Schema({
  width: Number,
  height: Number,
});

const UserSchema = new Schema(
  {
    shortId,
    userEmail: {
      type: String,
      required: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userPhone: {
      type: String,
      required: true,
    },
    userAddress: {
      type: String,
      required: true,
    },
    userImg: {
      type: imageSchema,
      required: false,
    },
    userType: {
      type: String,
      required: true,
      default: userDefaultType,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserSchema;
