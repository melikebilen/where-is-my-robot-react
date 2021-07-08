import React from 'react';
import '../App.css';
import './AboutRobot.css';

function AboutRobot() {
  return (
    <div className='hero-container'>
      <video className='frontvideo' src='/videos/robotvideo2.mp4' autoPlay loop muted />
      <img className='ourpictures' src='/images/roborimg.jpg'></img>
    </div>
  );
}

export default AboutRobot;