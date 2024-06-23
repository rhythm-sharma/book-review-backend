import db from "../models/index.js";

const Book = db.book;

const getBooks = async (limit, offset, where) =>
  Book.findAndCountAll({
    limit,
    offset,
    where,
  });

const getBookById = async (bookId) =>
  Book.findOne({
    where: {
      bookId,
    },
  });

export default {
  getBooks,
  getBookById,
};
