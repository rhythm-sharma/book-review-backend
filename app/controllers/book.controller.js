import catchAsync from "../utils/catchAsync.js";
import { bookService } from "../services/index.js";
import util from "../utils/util.js";
import db from "../models/index.js";

const Op = db.Sequelize.Op;

const getBooks = catchAsync(async (req, res) => {
  const { page, size, title, genre } = req.query;
  let condition = null;

  if (title) {
    condition = {
      title: { [Op.like]: `%${title}%` },
    };
  } else if (genre) {
    condition = {
      genre,
    };
  }

  const { limit, offset } = util.getPagination(page, size);

  let response = await bookService.getBooks(limit, offset, condition);

  response = util.getPagingData(response, page, limit);
  res.send(response);
});

const getBookById = catchAsync(async (req, res) => {
  const { bookId } = req.query;
  let response = await bookService.getBookById(bookId);
  res.send(response);
});

const review = catchAsync(async (req, res) => {
  const { body } = req;
  let response = await bookService.review({
    bookId: body.bookId,
    review: body.review,
    rating: body.rating,
  });
  res.send(response);
});

export default {
  getBooks,
  getBookById,
  review,
};
