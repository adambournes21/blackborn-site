import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links-row">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Founders</a></li>
        </ul>
        <h1 className="navbar-title">BlackBourn Technologies</h1>
        <ul>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;