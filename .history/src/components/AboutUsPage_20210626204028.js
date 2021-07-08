import React from 'react';
import '../App.css';
import './AboutRobot.css';
import Image from 'react-image-resizer';

function AboutUsRobot() {
  return (
    <div className='hero-container'>
    <Image
          img src={'/images/melike.jpeg'} alt="cur" class="center"
          height={350}
          width={700}
        />
    <img className='ourpictures' src='/images/melike.jpeg'/>
    <img className='ourpictures' src='/images/pinar.JPG'/>
      <video className='frontvideo' src='/videos/robotvideo2.mp4' autoPlay loop muted />
    </div>
  );
}

export default AboutUsRobot;