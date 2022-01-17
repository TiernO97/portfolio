import React from 'react'

// Styles
import "../../styles/components/ProjectCard/ProjectCard.scss";

const ProjectCard = ({ project }) => {

    return (
        <div className="project-card-container">
            <div className="project-card-image">
                <img src={project.featured_image.src} alt={project.featured_image.alt} />
                <div className="overlay"></div>
            </div>
            <div className="project-card-content">
                <h2>{project.name}</h2>
            </div>
        </div>
    )
}

export default ProjectCard
