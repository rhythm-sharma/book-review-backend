import db from "../models/index.js";

const Reviews = db.reviews;
const User = db.user;

const createReview = async (review) => {
  return Reviews.create(review);
};

const getByBookId = async (bookId) => {
  return Reviews.findAll({
    include: [
      {
        model: User,
        attributes: ["name", "profileImage", "email"], // Specify the user attributes you want to include
      },
    ],
    where: {
      bookId,
    },
  });
};

export default {
  createReview,
  getByBookId,
};
