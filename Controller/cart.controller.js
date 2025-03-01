import Cart from "../Model/cart.model.js";
import Product from "../Model/product.model.js";

// Add a product to the shopping cart
export async function addProduct(req, res) {
    try {
        const {productId,quantity} = req.body
      
        // check if product ID exists before adding to cart
        const product = await Product.findById(productId);

        if(!product){
            return res.status(404).json({message:"Product not found"})
        }

        const cartItem = await Cart.create({
            productID : productId,
            quantities : quantity
        })

        cartItem.save().then((data)=>{
            console.log(data)
        })

        res.status(200).send(cartItem);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send({ error: "Error fetching products" });
    }
}


// Update the quantity of a product in the cart
export async function updateQuantity(req, res) {
    try {
        const cartId = req.params.id
      
        // check if product exists in the cart
        const cartItem = await Cart.findById(cartId);

        if(!cartItem){
            return res.status(404).json({message:"Product not found in the cart"})
        }

        const keys = Object.keys(req.body);
        cartItem[keys] = req.body[keys];

        await cartItem.save();

        res.status(200).send(cartItem);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send({ error: "Error fetching products" });
    }
}


// Remove a product from the cart
export async function deleteProduct(req, res) {
    try {
        const cartId = req.params.id;
      
        // Check if product exists in the cart
        const cartItem = await Cart.findById(cartId);

        if(!cartItem){
            return res.status(404).json({message: "Product not found in the cart"});
        }

        const deletedItem = await Cart.deleteOne({_id: cartId});

        res.status(200).json(deletedItem);

    } catch (error) {
        console.error("Error removing product from the cart:", error);
        res.status(500).json({ error: "Error removing product from the cart" });
    }
}