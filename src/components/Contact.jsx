import React, { useState } from 'react';
import axios from 'axios';
 import '../styles/contact.css'; // Import CSS for styling
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contacts', formData);
      console.log('Response from backend:', res.data); // Log response from backend
      setResponseMessage(res.data.message); // Update the message state with success message
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setResponseMessage('Failed to submit contact form'); // Error message
    }
  };

  return (
    <div>

      <form onSubmit={handleSubmit} className='contact-form'>
      <h2 style={{fontSize:'40px'}}>Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>} {/* Display success or error message */}
    </div>
  );
};

export default Contact;
