import React from 'react';
import '../App.css';
import './AboutRobot.css';

function AboutUsRobot() {
  return (
    <div className='hero-container'>
    
    <img className='ourpictures' src='/images/melike.jpeg'/>
    <img className='ourpictures' src='/images/pinar.JPG'/>
      <video className='frontvideo' src='/videos/robotvideo2.mp4' autoPlay loop muted />
    </div>
  );
}

export default AboutUsRobot;