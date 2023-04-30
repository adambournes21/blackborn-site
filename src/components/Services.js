import React from 'react';
import '../styles/services.css';
import AIbackdrop from '../images/AI-backdrop.jpeg';

const Services = () => {
  return (
    <div className="text-over-image-container">
      <img src={AIbackdrop} alt="Drone" className="image" />
      <div className="text-overlay">
        <div className="title">Services:</div>
        <ul className="points">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tellus tristique, ullamcorper quam eu, lacinia ipsum. Fusce sed augue quis libero tempor rhoncus. Phasellus euismod augue in magna rutrum, vel bibendum lectus varius. Sed euismod auctor velit vitae vestibulum.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tellus tristique, ullamcorper quam eu, lacinia ipsum. Fusce sed augue quis libero tempor rhoncus. Phasellus euismod augue in magna rutrum, vel bibendum lectus varius. Sed euismod auctor velit vitae vestibulum.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tellus tristique, ullamcorper quam eu, lacinia ipsum. Fusce sed augue quis libero tempor rhoncus. Phasellus euismod augue in magna rutrum, vel bibendum lectus varius. Sed euismod auctor velit vitae vestibulum.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tellus tristique, ullamcorper quam eu, lacinia ipsum. Fusce sed augue quis libero tempor rhoncus. Phasellus euismod augue in magna rutrum, vel bibendum lectus varius. Sed euismod auctor velit vitae vestibulum.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tellus tristique, ullamcorper quam eu, lacinia ipsum. Fusce sed augue quis libero tempor rhoncus. Phasellus euismod augue in magna rutrum, vel bibendum lectus varius. Sed euismod auctor velit vitae vestibulum.</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
