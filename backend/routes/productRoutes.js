import express from "express";
// import products from '../data/products.js'; // we can comment this out since from now we will fetch product from database (mongoDB) not a file anymore.
import { getProducts, getProductById } from "../controllers/productController.js";

const router = express.Router();

// initiall we have a route as "/api/products", but we will pass this path as an argument to this file later so they apply to every route. so we will just leave them as "/"
// first route, product page
router.route('/').get(getProducts);

// second route, single product page
//:id is a place holder for product id
router.route('/:id').get(getProductById);


export default router;
