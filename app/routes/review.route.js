import express from "express";
import reviewController from "../controllers/review.controller.js";
import auth from "../middlewares/auth.js";
import validate from "../middlewares/validate.js";
import reviewValidation from "../validations/review.validation.js";

const router = express.Router();

router.post(
  "/",
  auth(),
  validate(reviewValidation.review),
  reviewController.createReview
);

router.get("/getByBookId", auth(), reviewController.getByBookId);

export default router;
