import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FounderCards from './components/FounderCards';
import Services from './components/Services';
import './App.css';

const App = () => {
  return (
    <div>
      <Home />
      <FounderCards />
      <Services />
    </div>
  );
};

export default App;
