const { Schema } = require("mongoose");

const reviewSchema = new Schema(
    {
        reviewNo: {
            type: Number,
            required: true,
        },
        reviewCreateDate: {
            type: Date,
            required: true,
            default: Date.now,
        },
        userName: {
            type: String,
            required: true,
        },
        reviewRate: {
            type: Number,
            required: true,
        },
        reviewContent: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'reviews',
        timestamps: true,
    },
);

module.exports = reviewSchema;
