import React from 'react';
import { useNavigate } from 'react-router';
import './AddToCart.css'; // Optional: Import CSS for styling

const AddToCart = ({ cartItems }) => {

    const navigate = useNavigate();
    // Calculate total amount
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    const handleBuyNow = () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Please add items to the cart before proceeding.');
        } else {
           navigate("/Checkout",{
            state:{
                cartItems, 
                totalAmount
            }
           });
           
        }
    };

    return (
        <div className="add-to-cart">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>Price: ₹{item.price.toFixed(2)}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="total-amount">
                <h3>Total Amount: ₹{totalAmount}</h3>
            </div>
            <button onClick={handleBuyNow}>Buy Now</button>
        </div>
    );
};

export default AddToCart;
