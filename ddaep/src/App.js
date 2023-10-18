// App.js
import React from 'react';
import Navbar from './NavBar/NavBar';
import MainBanner from './MainBanner/MainBanner';
import SkinsGallery from './SkinsGallery/SkinsGallery';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainBanner />
      <SkinsGallery />
    </div>
  );
}

export default App;
