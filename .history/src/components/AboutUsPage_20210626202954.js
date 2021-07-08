import React from 'react';
import '../App.css';
import './AboutRobot.css';

function AboutRobot() {
  return (
    <div className='hero-container'>
    <div className='row'>
    <img className='ourpictures' src='/images/robotimg.JPG'/>
    <img className='ourpictures' src='/images/melike.jpeg'/>
    </div>
    <img className='ourpictures' src='/images/pinar.JPG'/>
      <video className='frontvideo' src='/videos/robotvideo2.mp4' autoPlay loop muted />
    </div>
  );
}

export default AboutRobot;