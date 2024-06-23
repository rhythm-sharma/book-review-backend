import express from "express";
import authRoute from "./auth.route.js";
import bookRoute from "./book.route.js";
import reviewRoute from "./review.route.js";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/",
    route: authRoute,
  },
  {
    path: "/book",
    route: bookRoute,
  },
  {
    path: "/review",
    route: reviewRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
