import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public (every user can access. Pricate: only admin can access)


// initiall we have a route as "/api/products", but we will pass this path as an argument to this file later so they apply to every route. so we will just leave them as "/"
const getProducts = asyncHandler( async (req, res) => {
    // here is how we get all products from database. we can specify which product to get but to get all products we just pass an empty object
    const products = await Product.find({});
    res.send(products);
});


// @desc    Fetch a single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler( async (req, res) => {
    // here is how we fetch a product based on id
    const product = await Product.findById(req.params.id);

    if (product) {
      return res.json(product);
    } else {
      // res.status(404).json({ message: 'Resource not found'});  // this is the traditional error handling way. We replaced with exception handling with a code below
      res.status(404);
      throw new Error("Resource not found");
    }
});

export { getProducts, getProductById };