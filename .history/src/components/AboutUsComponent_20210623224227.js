import React from 'react';
import '../App.css';
import './AboutUsComponent.css';

function AboutUsComponent() {
  return (
    <div className='hero-container'>
      <video src='/videos/robot.mp4' autoPlay loop muted />
      <img src='/images/white.jpg'> </img>
    </div>
  );
}

export default AboutUsComponent;