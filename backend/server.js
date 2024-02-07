// const express = require('express');        This is used previously but we wanna stick with the same syntax as frontend
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
// const port = 5000;  // variable port = 5000 which means our backend will run on port 5000 where our frontend is running on port 3000
const port = process.env.PORT || 5000; // here we use environment variable instead of hard coded number like 5000.

connectDB(); // connect to our database which is MongoDB atlas

const app = express(); // initialize express

// First route, Root or homepage
// req: request
// res: response
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* Here is before we have routes folder, we just do routing for product here */
// Second route, product page
// app.get('/api/products', (req, res) => {
//     res.send(products);
// });

// // Third route, single product page
// //:id is a place holder for product id
// app.get('/api/products/:id', (req, res) => {
//     const product = products.find((p) => p._id === req.params.id);
//     res.json(product);
// });


/* Here is after we do routing in separate folder*/
app.use('/api/products', productRoutes);


/* Below is error handler*/
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
