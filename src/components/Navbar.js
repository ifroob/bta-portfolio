// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFilePdf } from 'react-icons/fa';
// import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <FaHome className="nav-icon" /> Home
      </Link>
      <Link to="/resume" className="nav-link">
        <FaFilePdf className="nav-icon" /> Resume
      </Link>
    </nav>
  );
};

export default Navbar;
