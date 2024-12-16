import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectDetails from '../components/ProjectDetails';
import '../styles/home.css';

// Importing images
import carImage from '../styles/images/animation1.jpg'; // Adjust image path as needed
import rakeshImage from '../styles/images/sklog.webp'; // Adjust image path as needed

const Home = () => {
  const navigate = useNavigate();

  // Function to handle button click
  const handleBookRide = () => {
    navigate('/cars');
  };

  return (
    <div className="fade-in">
      <Header />

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h1 className="bounce">Welcome to SK Travels</h1>
          <p style={{fontSize:'20px'}}>
            At SK Travels, we provide comfortable and reliable car travel services to make your journey seamless and enjoyable.
            Whether it's a business trip or a leisure getaway, we have the right vehicle for you.
          </p>
          <button className="cta-button" onClick={handleBookRide}>Book Your Ride</button>
        </div>
        <div className="about-image">
          <img src={carImage} alt="SK Travels" />
        </div>
      </section>

      {/* Cars Section */}
      <section id="projects" className="projects-section">
        <h2>Cars</h2>
        <ProjectDetails />
      </section>

      {/* About Me Section */}
      <section id="about-me" className="about-me-section">
        <div className="about-me-content">
          {/* Image Section */}
          <div className="about-me-image-container">
            <img src={rakeshImage} alt="Rakesh" className="about-me-image" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>About Us</h2>
        <p style={{fontSize:'20px'}}>
          <strong>SK Travels</strong> is a premier car travel service located in
          <strong> Dharwad</strong>. We specialize in providing reliable and
          convenient travel solutions tailored to meet your needs.
       
          With a commitment to excellence, <strong>SK Travels</strong> ensures a
          seamless travel experience with well-maintained vehicles and professional
          drivers. Whether it's a local trip or an outstation journey, we've got you covered.
       
          Choose <strong>SK Travels</strong> for your next journey and experience
          comfort, reliability, and exceptional service.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
