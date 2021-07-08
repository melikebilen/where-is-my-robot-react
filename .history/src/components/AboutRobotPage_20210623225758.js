import React from 'react';
import '../App.css';
import './AboutRobot.css';

function AboutRobot() {
  return (
    <div className='hero-container'>
      <video src='/videos/robotvideo2.mp4' autoPlay loop muted />
    </div>
  );
}

export default AboutRobot;