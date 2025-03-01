import { addProduct, updateQuantity,deleteProduct } from "../Controller/cart.controller.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

export function cartRoutes(app){
    
    app.post("/api/cart",verifyToken, addProduct);

    app.put("/api/cart/:id",verifyToken, updateQuantity);

    app.delete("/api/cart/:id",verifyToken, deleteProduct);

}
