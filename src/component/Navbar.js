// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-logo">Irshad Ahmad</h1>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/fertilizer" onClick={() => setIsMenuOpen(false)}>Fertilizer</Link>
                <Link to="/seed" onClick={() => setIsMenuOpen(false)}>Seed</Link>
                <Link to="/pesticide" onClick={() => setIsMenuOpen(false)}>Pesticide</Link>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
