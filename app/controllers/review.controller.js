import catchAsync from "../utils/catchAsync.js";
import { reviewService } from "../services/index.js";
import authService from "../services/auth.service.js";

const createReview = catchAsync(async (req, res) => {
  const { body } = req;

  const user = await authService.getUserByEmail(body?.email);

  let response = await reviewService.createReview({
    userId: user.userId,
    bookId: body.bookId,
    review: body.review,
    rating: body.rating,
  });
  res.send(response);
});

const getByBookId = catchAsync(async (req, res) => {
  const { bookId } = req.query;
  const reviews = await reviewService.getByBookId(bookId);
  res.send(reviews);
});

export default {
  createReview,
  getByBookId,
};
