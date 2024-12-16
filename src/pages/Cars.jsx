import React from 'react';
import { useNavigate } from 'react-router-dom';
 import '../styles/cars.css'; // Ensure this is inside src/

// Import images
import backgroundImage1 from '../styles/images/backgroundimage1.jpg';
import image2 from '../styles/images/image2.avif';
import image3 from '../styles/images/image3.avif';
import image4 from '../styles/images/image4.avif';
import image5 from '../styles/images/image5.avif';
import image6 from '../styles/images/image6.avif';
import img1 from '../styles/images/img1.jpg';

const Cars = () => {
    const navigate = useNavigate();

    const carImages = [
        { src: backgroundImage1, alt: "Luxury Car 1", price: "$50,000" },
        { src: image2, alt: "Luxury Car 2", price: "$60,000" },
        { src: image3, alt: "Luxury Car 3", price: "$55,000" },
        { src: image4, alt: "Luxury Car 4", price: "$70,000" },
        { src: image5, alt: "Luxury Car 5", price: "$65,000" },
        { src: image6, alt: "Luxury Car 6", price: "$75,000" },
        { src: img1, alt: "Luxury Car 7", price: "$80,000" },
    ];

    const handleClick = (carAlt) => {
        const confirmNavigation = window.confirm(`Do you want to book ${carAlt}?`);
        if (confirmNavigation) {
            navigate(`/booking?car=${carAlt}`);
        }
    };

    return (
        <div className="resume-section">
            <h2 style={{fontSize:'40px'}}>Our Cars</h2>
            <strong><p>Explore our collection of premium travel cars. Click on the buttons below to view details or book:</p></strong>
            <div className="car-gallery">
                {carImages.map((car, index) => (
                    <div key={index} className="car-item">
                        <button className="car-button" onClick={() => handleClick(car.alt)}>
                            <img
                                src={car.src}
                                alt={car.alt}
                                className="car-image"
                            />
                            <div className="car-details">
                                <p className="car-name">{car.alt}</p>
                                <p className="car-price">{car.price}</p>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cars;
