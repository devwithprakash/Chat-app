import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL)
        console.log(`Database connected successfully✅`)
    } catch (error) {
        console.log(error)
        throw new Error("DB connection failed", error)
    }
};

export default connectDB