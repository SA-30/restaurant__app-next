import mongoose from "mongoose";

const url = process.env.DATABASE_URL as string

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to the database...");
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
}