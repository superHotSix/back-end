const { Schema } = require("mongoose");

const itemSchema = new Schema(
  {
    itemId: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    concept: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumnailUrl: {
      type: String,
      required: true,
    },
    detailUrl: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "items",
    timestamps: true,
  }
);

module.exports = itemSchema;
