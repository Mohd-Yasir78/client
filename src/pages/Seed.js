import React, { useState, useEffect } from 'react';
import Product from '../component/Productcard';
import AddToCart from '../component/AddToCart';
import axios from 'axios'; // For API calls
import './Seed.css'

const Seed = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    // Fetch products from API
    useEffect(() => {
        axios.get('http://localhost:5000/api/seeds') // Replace with your actual API endpoint
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    // Handle adding products to cart
    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="seed-page">
            {/* Hero Banner */}
            <div className="hero-banner">
                <div className="hero-content">
                    <h1>Seeds Products</h1>
                    <p>Boost your crop yield with our premium fertilizers</p>
                </div>
            </div>

            {/* Product Cards */}
            <div className="product-list">
                {products.map(product => (
                    <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>

            {/* Add to Cart Section */}
            <AddToCart cartItems={cartItems} />
        </div>
    );
};

export default Seed;
