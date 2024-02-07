import mongoose from "mongoose";
import dotevn from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

// initialize environment variable
dotevn.config();

// connect to database
connectDB();

// import function
//  - before importing we will delete everything in database first
const importData = async () => {
    try {
        // before importing we will delete everything in database first
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        // create user and pass user list (users) to insertMany
        const createUsers = await User.insertMany(users);

        // to create a product, a user must create it which is admin user so we need to bring it here.
        const adminUser = createUsers[0]._id; // since admin user is at the first index, that is why we use [0] and we wanna get the object id "_id"

        // insert product. for each product, I wanna return and object that has all that product data "...Product" + a user value "admin User"
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser};
        });

        // insert our variable "sampleProducts" into database
        await Product.insertMany(sampleProducts);

        // print message on terminal, .green.inverse comes from colors
        console.log('Data Importe!'.green.inverse);

        // exit process
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}


// function to destroy
const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};



// condition to check argument value for which function to execute (importData or destroyData)
//      - argv[2] is the first argument that we pass mannually. like "node backend/seeder -d", if we specify -d, it means we wanna call destroyData()
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}