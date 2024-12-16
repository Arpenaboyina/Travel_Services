import React, { useState } from 'react';
import axios from 'axios';
import '../styles/booking.css'; // Import the CSS file

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [carName, setCarName] = useState('');
  const [message, setMessage] = useState(''); // For showing confirmation message

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data to be sent to the backend
    const formData = {
      name,
      email,
      phone,
      date,
      carName,
    };

    // Make a POST request to the backend to save the booking data
    axios
      .post('http://localhost:5000/api/bookings', formData)
      .then((response) => {
        // On success, show the confirmation message
        setMessage('Your car was booked successfully!');
      })
      .catch((error) => {
        // Handle errors if the request fails
        setMessage('There was an error booking your car. Please try again.');
      });
  };

  return (
    <div className="booking-page">
      <h1>Book Your Car</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />
        <label>Booking Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
        <label>Car Name:</label>
        <input
          type="text"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Booking;
