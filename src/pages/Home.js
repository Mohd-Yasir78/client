// src/pages/Home.js
import React, {useEffect} from 'react';
import './Home.css'; 
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.webp';
import about from '../assets/about.avif';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import customer1 from '../assets/coustmer1.jpg';
import customer2 from '../assets/coustmer2.jpg';
import customer3 from '../assets/coustmer3.jpg';
import customer4 from '../assets/customer4.jpg';
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {

    useEffect(()=>{
        AOS.init({duration : 1200})
      });


    return (
        <div className="home">
            {/* Hero Banner Section */}
            <section className="hero-banner">
                <div className="hero-content">
                    <h1>Welcome to Fertilizer Shop</h1>
                    <p>Your one-stop shop for all your farming needs.</p>
                    <button className="cta-button">Shop Now</button>
                </div>
            </section>

            {/* Three Box Section */}
            <div className='heading2' data-aos="fade-up">
            <h1 className='big'>Agriculture Seeds, Fertilizer and Pesticide</h1>
            <h2>Agriculture Seeds, Fertilizer and Pesticide</h2>
            </div>
            <section className="three-box-section" data-aos="fade-up">
                <div className="box">
                    <h2>Agriculture Seed</h2>
                </div>
                <div className="box1">
                    <h2>Fertilizer</h2>
                </div>
                <div className="box2">
                    <h2>Pesticide</h2>
                </div>
            </section>

            {/* Featured Products Section with Slider */}
            <section className="featured-products" data-aos="fade-up">
            <h2 className='small'>Featured Products</h2>
                <h1 className='big'>Featured Products</h1>
                <div className="product-slider" data-aos="fade-up">
                    {/* Example of Slider Content */}
                    <div className="slider-item">
                        <img src={p1} alt="Fertilizer" />
                        <h3>Organic Fertilizer</h3>
                        <p>Boost your crop yield with our organic fertilizers.</p>
                        <button className="cta-button">Add to Cart</button>
                    </div>
                    <div className="slider-item">
                        <img src={p2} alt="Fertilizer" />
                        <h3>Organic Fertilizer</h3>
                        <p>Boost your crop yield with our organic fertilizers.</p>
                        <button className="cta-button">Add to Cart</button>
                    </div>
                    <div className="slider-item">
                        <img src={p3} alt="Fertilizer" />
                        <h3>Organic Fertilizer</h3>
                        <p>Boost your crop yield with our organic fertilizers.</p>
                        <button className="cta-button">Add to Cart</button>
                    </div>
                    <div className="slider-item">
                        <img src={p4} alt="Fertilizer" />
                        <h3>Organic Fertilizer</h3>
                        <p>Boost your crop yield with our organic fertilizers.</p>
                        <button className="cta-button">Add to Cart</button>
                    </div>
                    <div className="slider-item">
                        <img src={p5} alt="Fertilizer" />
                        <h3>Organic Fertilizer</h3>
                        <p>Boost your crop yield with our organic fertilizers.</p>
                        <button className="cta-button">Add to Cart</button>
                    </div>
                    {/* Add more slider items as needed */}
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className='box4' data-aos="fade-left">
                <h1 className='big'>About Us</h1>
                <h2>About Us</h2>
                <p>Welcome to Fertilizer Shop, your trusted partner in agriculture!<br/>we are passionate about helping farmers and gardeners grow healthy,<br/> vibrant crops and plants. We understand the vital role that quality<br/> fertilizers play in agriculture, and that's why we are committed to<br/> providing you with top-quality fertilizers, seeds, and pesticides.</p>
                </div>
                <div className='box5' data-aos="fade-right">
                <img src={about} alt="About Us" />
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery" data-aos="fade-up">
                <h1 className='big'> Our Gallery</h1>
                <h2>Our Gallery</h2>
                <div className="gallery-grid">
                    <img src={gallery1} alt="Gallery 1" data-aos="zoom-out" />
                    <img src={gallery2} alt="Gallery 2" data-aos="zoom-out"/>
                    <img src={gallery3}alt="Gallery 3" data-aos="zoom-out"/>
                    {/* Add more gallery images as needed */}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials" data-aos="fade-up">
                <h1 className='big'>What Our Customers Say</h1>
                <h2>What Our Customers Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card" data-aos="zoom-in">
                        <img src={customer1} alt="Customer 1" />
                        <p>"Amazing quality and service!"</p>
                        <h4>Michael Robert Johnson</h4>
                    </div>
                    <div className="testimonial-card" data-aos="zoom-in">
                        <img src={customer2} alt="Customer 1" />
                        <p>"Amazing quality and service!"</p>
                        <h4>James Alexander Smith</h4>
                    </div>
                    <div className="testimonial-card" data-aos="zoom-in">
                        <img src={customer3} alt="Customer 1" />
                        <p>"Amazing quality and service!"</p>
                        <h4>David William Brown</h4>
                    </div>
                    <div className="testimonial-card" data-aos="zoom-in">
                        <img src={customer4} alt="Customer 1" />
                        <p>"Amazing quality and service!"</p>
                        <h4>John Thomas Davis</h4>
                    </div>
                    {/* Add more testimonials as needed */}
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="contact-us" >
                <h1 className='big'>Contact Us</h1>
                <h2>Contact Us</h2>
                <p>Reach out to us for any inquiries.</p>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                {/* Map Embed */}
                <div className="map" >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.698284868766!2d81.48005372618694!3d25.370937909925644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984d57be0227e31%3A0x1cd4bffe809625c0!2sSaray%20Ankil%2C%20Uttar%20Pradesh%20212216!5e1!3m2!1sen!2sin!4v1724348813788!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="Location Map"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};


export default Home;
