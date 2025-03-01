import { fetchAllProducts, fetchProductByID } from "../Controller/products.controller.js";

export function productsRoutes(app){

    app.get("/api/products", fetchAllProducts);

    app.get("/api/products/:id", fetchProductByID);
}
