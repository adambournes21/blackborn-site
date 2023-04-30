import React from 'react';
import '../styles/home.css';
import '../styles/navbar.css';
import acImage from '../images/aircraft-carrier.jpeg';
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="text-over-image-container">
      <img src={acImage} alt="Drone" className="image" />
      <div className="text-overlay">
        <Navbar />
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tellus tristique, ullamcorper quam eu, lacinia ipsum. Fusce sed augue quis libero tempor rhoncus. Phasellus euismod augue in magna rutrum, vel bibendum lectus varius. Sed euismod auctor velit vitae vestibulum. Praesent id erat id risus gravida molestie. Sed at felis vitae eros tempor mollis quis et risus. Nullam eu ipsum eu tellus pellentesque suscipit in vel neque. Nam maximus velit at leo fringilla viverra.</p>
      </div>
    </div>
  );
};

export default Home;
