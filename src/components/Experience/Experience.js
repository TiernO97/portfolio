import React from 'react';

// Styles
import "../../styles/components/Experience/Experience.scss";

import experience from "../../assets/files/experience";
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="experience">
                <h1>Experience</h1>
                <div className="experience-cards">
                    {experience.map((exp, index) => (
                        <ExperienceCard key={exp+index} experience={exp} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
