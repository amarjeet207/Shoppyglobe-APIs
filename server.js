import express from "express";
import mongoose from "mongoose";
import { cartRoutes } from "./Routes/cart.routes.js";
import { productsRoutes } from "./Routes/products.routes.js";
import { userRoutes } from "./Routes/users.routes.js";

// Connecting to MongoDB
mongoose.connect("mongodb://localhost:27017/Shoppyglobe", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("open", () => {
    console.log("DB connection is successful");
});

db.on("error", (error) => {
    console.error("DB connection is not successful:", error);
});


// Creating new app
const app = express();


// Middlewares
app.use(express.json());
app.use((req,res,next)=>{
    console.log("Request Method is ",req.method);
    next();
})

// Routes
cartRoutes(app);
productsRoutes(app);
userRoutes(app);


app.listen(5000, () => {
    console.log("Server running at port 5000");
});
