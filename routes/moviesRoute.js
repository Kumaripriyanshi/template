import express from "express";
import {
  addMoviesControllers,
  //   updateMoviesController,
  //   getAllMoviesController,
  //   deleteMoviesController,
} from "../controllers/moviesController.js";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/add-movies",
  requireSignIn,
  isAdmin,
  formidable(),
  addMoviesControllers
);
//routes
// router.put(
//   "/update-movies/:mid",
//   requireSignIn,
//   isAdmin,
//   formidable(),
//   updateMoviesController
// );

//get products
// router.get("/get-movies", getAllMoviesController);

//single product
// router.get("/get-movies/:mid", getSingleProductController);

//get photo
// router.get("/movie-photo/:mid", productPhotoController);

//delete rproduct
// router.delete("/delete-movie/:pmid", deleteMoviesController);

//filter product
// router.post("/product-filters", productFiltersController);

//product count
// router.get("/product-count", productCountController);

// //product per page
// router.get("/product-list/:page", productListController);

// //search product
// router.get("/search/:keyword", searchProductController);

// //similar product
// router.get("/related-product/:pid/:cid", realtedProductController);

// //category wise product
// router.get("/product-category/:slug", productCategoryController);

// //payments routes
// //token
// router.get("/braintree/token", braintreeTokenController);

// //payments
// router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
