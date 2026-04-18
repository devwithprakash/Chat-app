import mongoose from "mongoose";
<<<<<<< HEAD
import 'dotenv/config';
=======
import dotenv from "dotenv";

dotenv.config();
>>>>>>> 2a57d20e0c747697b5545c475cd1f4a3dbf1a0c0


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};  
