import React from 'react';
import '../App.css';
import './AboutRobot.css';

function AboutRobot() {
  return (
    <div className='hero-container'>
    <img className='ourpictures' src='/images/robotimg.JPG'/>
      <video className='frontvideo' src='/videos/robotvideo2.mp4' autoPlay loop muted />
      <div className='ourpictures'>
        <img src='/images/roborimg.jpg'></img>
      </div>
    </div>
  );
}

export default AboutRobot;