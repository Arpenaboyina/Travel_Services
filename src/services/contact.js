import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contact';

export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data.message;
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};
