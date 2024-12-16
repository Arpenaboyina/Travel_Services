import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Cars from './pages/Cars';
import Booking from './pages/Booking';
import Contact from './components/Contact';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import UsersList from './pages/UsersList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/userslist" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
