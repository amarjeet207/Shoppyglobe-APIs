## Introduction
ShoppyGlobe is an e-commerce backend application built using Node.js, Express, and MongoDB. It provides APIs for managing products, shopping carts, and user authentication.

## Features
- Fetch products from MongoDB
- Add, update, and remove items in the shopping cart
- User registration and authentication
- JWT-based authorization to protect cart routes

## Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/shoppyglobe.git
    cd shoppyglobe
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the server:
    ```bash
    npm start
    ```
2. The server will run on `http://localhost:your_port_number`.

## API Endpoints

### Products
- `GET /products`: Fetch a list of products.
- `GET /products/:id`: Fetch details of a single product by its ID.

### Cart
- `POST /cart`: Add a product to the shopping cart.
- `PUT /cart/:id`: Update the quantity of a product in the cart.
- `DELETE /cart/:id`: Remove a product from the cart.

### Authentication
- `POST /register`: Register a new user.
- `POST /login`: Authenticate user and return a JWT token.

## Database Collections
### Products
- Fields: `name`, `price`, `description`, `stock`

### Cart
- Fields: `product_id`, `quantities`

## Error Handling and Validation
- Implemented error handling for all API routes.
- Input data validation ensures data integrity (e.g., checking if product ID exists before adding to cart).

## Authentication & Authorization
- JWT-based authentication is implemented.
- User registration and login routes are created.
- Cart routes are protected, accessible only to logged-in 