import express from "express";
import bookController from "../controllers/book.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/getAll", auth(), bookController.getBooks);

router.get("/getById", auth(), bookController.getBookById);

export default router;
