import React from 'react'
import './HeroSection.css';
import {Button} from './Button';
function HeroSection() {
    return (
        <div className="hero-container">
            <video src='videos/robot.mp4' autoPlay loop muted/>
            <h1>COOL ROBOT</h1>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'/>
            </div>
        </div>
    )
}

export default HeroSection
