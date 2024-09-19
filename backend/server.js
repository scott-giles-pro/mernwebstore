import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();

//allows us to use json data in the req.body
app.use(express.json());

//this method prefixes /api/products onto all routes in the controller
app.use("/api/products", productRoutes); 

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
})
