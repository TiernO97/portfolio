import React from 'react'

// Styles
import "../../styles/components/Experience/ExperienceCard.scss";

const ExperienceCard = ({experience}) => {
    return (
        <div className="experience-card">
            <div className="heading">
                <p>{experience.when}</p>
                <h2>{experience.role}</h2>
                <h3>{experience.where}</h3>
            </div>
            <div className="tech">
                <h4>Tech used</h4>
                <p>{experience.technologies}</p>
            </div>
            <div className="duties">
                <h4>Duties</h4>
                <p>{experience.duties}</p>
            </div>
        </div>
    )
}

export default ExperienceCard
