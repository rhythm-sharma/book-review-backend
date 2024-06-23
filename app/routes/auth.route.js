import express from "express";
import validate from "../middlewares/validate.js";
import authValidation from "../validations/auth.validation.js";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", validate(authValidation.login), authController.login);

export default router;
