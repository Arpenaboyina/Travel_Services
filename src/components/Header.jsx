import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/header.css';

import skTravelLogo from '../styles/images/SK_travel.webp';

const Header = () => {
  const navOptions = [
    { name: 'Home', path: '/' },
    { name: 'Cars', path: '/cars' },
    { name: 'Contact', path: '/contact' },
    {name:'UsersList',path:'/userslist'}
  ];

  const dropdownOptions = [
    { name: 'Register', path: '/register' },
    { name: 'SignIn', path: '/signin' },
  ];

  return (
    <header className="header-container">
      <nav className="nav-bar">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={skTravelLogo} alt="SK Travels Logo" className="logo" />
          </Link>
        </div>
        
        <ul className="nav-list">
          {navOptions.map((option, index) => (
            <li key={index} className="nav-item">
              <Link to={option.path} className="nav-link">
                {option.name}
              </Link>
            </li>
          ))}
          <li className="nav-item dropdown-container">
            <Dropdown>
              <Dropdown.Toggle className="nav-link dropdown-toggle">
                Sign
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {dropdownOptions.map((option, index) => (
                  <Dropdown.Item key={index} as={Link} to={option.path}>
                    {option.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
