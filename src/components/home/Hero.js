import React from 'react'

// Styles
import "../../styles/components/Home/Hero.scss";

// Assets
import HeroImage from "../../assets/Images/Home/hero-01.jpg";

const Hero = (props) => {
    return (
        <div className="home-hero-container">
            <div className="home-hero-background">
                <img src={HeroImage} alt="Background diamond shapes" />
                <div className="overlay"></div>
            </div>
            <div className="home-hero-content">
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
                <p>{props.text}</p>

            </div> 
        </div>
    )
}

export default Hero
