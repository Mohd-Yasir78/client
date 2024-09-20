// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Fertilizer from './pages/Fertilizer';
import Seed from './pages/Seed';
import Pesticide from './pages/Pesticide';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './component/Footer';
import Checkout from './component/Checkout';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/fertilizer" element={<Fertilizer />} />
                    <Route path="/seed" element={<Seed />} />
                    <Route path="/pesticide" element={<Pesticide />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
