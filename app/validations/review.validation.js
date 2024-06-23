import Joi from "joi";

const review = {
  body: Joi.object().keys({
    bookId: Joi.string().required(),
    review: Joi.string().required(),
    rating: Joi.string().required(),
    email: Joi.string().required(),
  }),
};

export default { review };
