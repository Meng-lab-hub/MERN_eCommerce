import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    user: {
      // we also want a user here since the user of a review will be difference from user who create the products (it could be same too)
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    user: {
      // Since every product will be associate to user (Admin or a user who create the product) therefore we will have user in schema as well
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema], // for reviews, we will define a reviewSchema separately, so here we can just call reviewSchema
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true, // we also want a timestamp which we can create just like other field e.g name, brand. But we can create in this way too.
  }
);

const Product = mongoose.model("Product", productSchema); // here we create a product which we will pass and information from "Product" based on productSchema

export default Product;
