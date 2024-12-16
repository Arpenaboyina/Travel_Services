// UsersList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UsersList.css'; // Import CSS for styling

const UsersList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings'); // URL to fetch bookings data
        setBookings(response.data.bookings); // Set bookings data
        setLoading(false);
      } catch (err) {
        setError('Error fetching bookings data');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bookings-container">
      <h2>Bookings List</h2>
      <div className="bookings-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <h3>{booking.name}</h3>
            <p><strong>Car:</strong> {booking.car_name}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Phone:</strong> {booking.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
