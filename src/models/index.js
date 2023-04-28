const mongoose = require("mongoose");
const UserSchema = require("./schemas/user");
const itemSchema = require("./schemas/item");
const reviewSchema = require("./schemas/review");
const OrderSchema = require("./schemas/order");
require("dotenv").config({ path: "./.env" });

const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

mongoose.connection.on("error", () => {
  console.log("MongoDB error");
});

itemSchema.statics.getNextItemId = async function () {
  const lastItem = await this.findOne().sort({ itemId: -1 }).exec();
  return lastItem ? lastItem.itemId + 1 : 1;
};

exports.Item = mongoose.model("Item", itemSchema);
exports.Review = mongoose.model("Review", reviewSchema);
exports.User = mongoose.model("User", UserSchema);
exports.Order = mongoose.model("Order", OrderSchema);
