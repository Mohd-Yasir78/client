// src/components/Footer.js
import React, { useEffect } from 'react';
import './Footer.css'; 
import Logo from '../assets/an_elegant_and_royal_looking_logo_for_Irshad_fer.jpg';
import Facebook from '../assets/facebook.jpeg';
import Whatsapp from '../assets/Whatsapp.jpeg';
import Twitter from '../assets/Twitter.jpeg';
import Instagram from '../assets/Instagram.jpeg';
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(()=>{
        AOS.init({duration : 1200})
    })
    return (
        <footer className="footer" data-aos="fade-up">
            <div className="footer-content">
                {/* About Section */}
                <div className="footer-about">
                    <img src={Logo} alt="Footer Logo" className="footer-logo" />
                    <p>
                        We are committed to providing high-quality fertilizers, seeds, and pesticides to help your farm thrive. Our products are carefully selected to meet your agricultural needs.
                    </p>
                </div>

                {/* Contact Information Section */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><strong>Address:</strong> 123 Farm Road, AgriCity, AG 45678</li>
                        <li><strong>Phone:</strong> (123) 456-7890</li>
                        <li><strong>Email:</strong> <a href="mailto:info@fertilizershop.com">info@fertilizershop.com</a></li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/fertilizer">Fertilizer</a></li>
                        <li><a href="/seed">Seed</a></li>
                        <li><a href="/pesticide">Pesticide</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" /></a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter" /></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" /></a></li>
                        <li><a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><img src={Whatsapp} alt="Whatsapp" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Fertilizer Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
