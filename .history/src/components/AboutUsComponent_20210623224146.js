import React from 'react';
import '../App.css';
import './HeroSection.css';

function AboutUsComponent() {
  return (
    <div className='hero-container'>
      <video src='/videos/robot.mp4' autoPlay loop muted />
    </div>
  );
}

export default AboutUsComponent;