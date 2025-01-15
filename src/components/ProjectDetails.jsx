import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/projectDetails.css';
import { useNavigate } from 'react-router-dom';

// Paths to local images
const cars = [
    { title: 'Luxury Sedan', image: require('../styles/images/image2.jpg'), link: '/cars' }, // Link to /cars
    { title: 'Sports Car', image: require('../styles/images/image3.jpg'), link: '/cars' },   // Link to /cars
    { title: 'Electric Car', image: require('../styles/images/image4.jpg'), link: '/cars' }, // Link to /cars
    { title: 'SUV', image: require('../styles/images/image5.jpg'), link: '/cars' },          // Link to /cars
    { title: 'Convertible', image: require('../styles/images/image6.jpg'), link: '/cars' },  // Link to /cars
];

const ProjectDetails = () => {
    const navigate = useNavigate();

    const handleImageClick = (link) => {
        navigate(link); // This will navigate to /cars
    };

    return (
        <div className="project-carousel-container">
            <Carousel>
                {cars.map((car, index) => (
                    <Carousel.Item key={index} className="project-carousel-item">
                        <div
                            className="car-card"
                            style={{
                                backgroundImage: `url(${car.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '600px',
                        
                                cursor: 'pointer',
                            }}
                            onClick={() => handleImageClick(car.link)} // Clicking the image will navigate to /cars
                        >
                            <div className="car-title">
                                <h3>{car.title}</h3>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default ProjectDetails;
