import mongoose from "mongoose";
// this file is mainly where we connect to our database.

// we create a function to connect to a database call connectDB
// - here we have try to connect to MONGO_URI which is our string to database mongo Atlas, if successfull we log successful message, if not, we log error message
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};


export default connectDB;