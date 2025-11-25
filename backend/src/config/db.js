import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connect database successfully");
    } catch (error) {
        console.log("error", error);
        process.exit(1);
    }
}