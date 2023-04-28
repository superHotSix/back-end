const { Router } = require("express");
const { Review } = require("../models");
const asyncHandler = require("../utils/asyncHandler");

const router = Router();

router.get("/:id", asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const review = await Review.findById(id);
    res.json(review);
  }
));

router.post("/:id", asyncHandler(async (req, res, next) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
}));

router.put("/:id/:user",
  asyncHandler(async (req, res, next) => {
    const { id, user } = req.params;
    updatedReview = await Review.findByIdAndUpdate({ id: id, userName: user }, req.body, { new: true });

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }else if(user !== updatedReview.userName){
      return res.status(400).json({ message: "Access Denied." });
    }
    res.json(updatedReview);  

  })
);
router.delete("/:id/:user",
  asyncHandler(async (req, res, next) => {
    const { id, user } = req.params;
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }else if(user !== updatedReview.userName){
      return res.status(400).json({ message: "Access Denied." });
    }
    res.json({ message: "Review deleted successfully" });
  })
);


module.exports = router;
