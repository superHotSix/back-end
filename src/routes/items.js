const express = require("express");
const { Router } = require("express");
const { Item } = require("../models");
const path = require("path");
const asyncHandler = require("../utils/asyncHandler");

const router = Router();
const mainPath = path.join(__dirname, "../../../front-end/pages/mainPage");
router.use(express.static(mainPath));

router.get(
  "/:category",
  asyncHandler(async (req, res, next) => {
    const category = req.params.category;
    // const concept = req.query.concept
    let items = null;
    items = await Item.find({ category: category });
    // items = await Item.find({category:category, concept:{$in:concept}});
    items = await Item.find({ category: category });

    if (!items) {
      res.status(404).json({ message: "Category not found" });
    } else {
      res.json(items);
    }
  })
);

router.get(
  "/:category/:itemId",
  asyncHandler(async (req, res, next) => {
    const { category } = req.params;
    const { itemId } = req.params;
    const item = await Item.findOne({ itemId: itemId });
    // const item = await Item.findOne({itemId:itemId, category:category});

    if (!item) {
      res.status(404).json({ message: "Item not found" });
    } else {
      res.json(item);
    }
  })
);

router.get(
  "/:category/concept/:concept",
  asyncHandler(async (req, res, next) => {
    const { category, concept } = req.params;
    // const conceptArr = req.query;
    const item = await Item.find({ concept: concept, category: category });

    if (!item) {
      res.status(404).json({ message: "Item not found" });
    } else {
      res.json(item);
    }
  })
);

router.post(
  "/admin/products",
  asyncHandler(async (req, res, next) => {
    const newItem = new Item(req.body);
    newItem.itemId = await Item.getNextItemId();
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  })
);

router.put(
  "/admin/products/:itemId",
  asyncHandler(async (req, res, next) => {
    const { itemId } = req.params;
    const updatedItem = await Item.findOneAndUpdate({ itemId }, req.body, {
      new: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(updatedItem);
  })
);
router.delete(
  "/admin/products/:itemId",
  asyncHandler(async (req, res, next) => {
    const { itemId } = req.params;
    const deletedItem = await Item.findOneAndDelete({ itemId });
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    await Item.updateMany(
      { itemId: { $gt: itemId } },
      { $inc: { itemId: -1 } }
    );
    res.json({ message: "Item deleted successfully" });
  })
);

module.exports = router;
