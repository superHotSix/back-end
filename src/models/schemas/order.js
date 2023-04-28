const { Schema } = require("mongoose");
const shortId = require("./types/shortId");

const orderStatus = "주문완료";
const paymentMethod = "계좌이체";

const OrderSchema = new Schema(
  {
    shortId,
    // product: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Item",
    // },
    productName: {
      type: String,
      required: false,
    },
    productPrice: {
      type: Number,
      required: false,
    },
    productQuantity: {
      //주문수량
      type: Number,
      required: false,
    },
    totalPrice: {
      type: Number,
      required: false,
    },
    userName: {
      type: String,
      required: false,
    },
    userEmail: {
      type: String,
      required: false,
    },
    userPhone: {
      type: String,
      required: false,
    },
    userAddress: {
      type: String,
      required: false,
    },
    orderPassword: {
      type: String,
      required: false,
    },
    paymentMethod: {
      type: String,
      required: true,
      default: paymentMethod,
    },
    orderStatus: {
      type: String,
      required: true,
      default: orderStatus,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = OrderSchema;
