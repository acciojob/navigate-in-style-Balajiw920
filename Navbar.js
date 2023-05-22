import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Itinerary</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
