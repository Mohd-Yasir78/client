import React from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    // Use location to get the state
    const location = useLocation();
    const { cartItems, totalAmount } = location.state || { cartItems: [], totalAmount: 0 };

    // Sample form state
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [paymentMethod, setPaymentMethod] = React.useState('credit');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission
        alert('Order placed successfully!');
    };

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <div className="checkout-container">
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="order-item">
                                <img src={item.image} alt={item.name} className="order-item-image" />
                                <div className="order-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ₹{item.price.toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="order-total">
                        <h3>Total Amount: ₹{totalAmount}</h3>
                    </div>
                </div>
                <div className="checkout-form">
                    <h2>Customer Information</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Address:
                            <textarea
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Payment Method:
                            <select
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                                <option value="credit">Credit Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="cod">Cash on Delivery</option>
                            </select>
                        </label>
                        <button type="submit">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
