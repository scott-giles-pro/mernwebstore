import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//Mongo server information stored in .env
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); // Use the env variable here
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); //exit with failure code 1
    }
}
