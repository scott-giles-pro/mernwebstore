import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT; //port assigned in .env

//allows us to use json data in the req.body
app.use(express.json());

//use cors
app.use(cors());

//this method prefixes /api/products onto all routes in the controller
app.use("/api/products", productRoutes); 

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
})