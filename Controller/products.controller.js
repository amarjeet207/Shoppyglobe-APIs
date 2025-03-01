import Product from "../Model/product.model.js";

// Fetch a list of products from MongoDB.
export async function fetchAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send({ error: "Error fetching products" });
    }
}


// Fetch details of a single product by its ID
export async function fetchProductByID(req, res) {
    try {
        const productId = req.params.id

        const product = await Product.findById(productId);

        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).send(product);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send({ error: "Error fetching products" });
    }
}