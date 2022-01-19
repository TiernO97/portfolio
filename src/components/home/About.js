import React from 'react';

// Styles
import "../../styles/components/Home/About.scss";

const About = (props) => {
    return (
        <div ref={props.refProp} className="about-container">
            <h1>About Me</h1>
            <div className="content">
            <p>I am a 24 year old Full-Stack Developer with a passion for problem solving, building feature rich web applications and working hard every day to put my stamp on the world of technology! I am a driven goal orientated person who strives to achieve more and more whether it be in terms of my skills, psychology or life in general.</p>
            <br></br>
            <p>I have been coding for multiple years, but professionally for almost 2 years! In my time I have learned modern technologies such as ReactJS, NodeJS, Express, MongoDB, PHP and Wordpress! I am constantly looking to learn and expand my skill set which is why I am actively learning new skills such as GraphQL, React Native and TailwindCSS!</p>
            <br></br>
            <p>Outside of coding I am an avid sports fan, I am massively into Football, Formula One, MMA and Boxing! I enjoy keeping active by walking a lot and enjoy going to see new movies. I am an avid Marvel fan, but enjoy many other movie genres. I have many goals, my main one currently is to begin driving. I am in the middle of taking lessons and hope to have accomplished that fully in the coming months!</p>
            </div>
        </div>
    )
}

export default About
