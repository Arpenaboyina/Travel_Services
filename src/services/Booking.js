import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

import '../styles/resume.css';
import '../styles/images/backgroundimage1.jpg';

const Booking = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const carName = queryParams.get('car');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/bookings', {
                ...formData,
                carName,
            });

            alert(response.data.message);
            // Optionally clear the form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
            });
        } catch (error) {
            console.error('Error submitting the booking form:', error);
            alert('There was an error saving the booking. Please try again.');
        }
    };

    return (
        <div className="resume-section">
            <h2>Book Your Car</h2>
            <p>You are booking: <strong>{carName}</strong></p>
            <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Booking Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Confirm Booking</button>
            </form>
        </div>
    );
};

export default Booking;
