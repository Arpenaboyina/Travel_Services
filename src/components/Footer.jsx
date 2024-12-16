import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 SK Travels. All rights reserved.</p>
            <ul className="footer-links">
                <li>
                    <a
                        href="mailto:hidhay.sheik@gmail.com"
                        className="footer-btn email-btn"
                    >
                        Email
                    </a>
                </li>
                <li>
                    <a
                        href="tel:+919885173209"
                        className="footer-btn phone-btn"
                    >
                        Call for Booking
                    </a>
                </li>
            </ul>
            <p className="contact-info">
                <strong>Phone:</strong> +91 98851 73209
            </p>
        </footer>
    );
};

export default Footer;
