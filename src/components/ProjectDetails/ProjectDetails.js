import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


// Styles
import "../../styles/components/ProjectDetails/ProjectDetails.scss";

const ProjectDetails = ({project}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const imageClickHandler = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    }

    const closeImageHandler = () => {
        setIsOpen(false);
        setSelectedImage(null);     
    }

    const getBackgroundColor = tech => {
        switch(tech) {
            case "ReactJS":
                return '#00a1e6'

            case "NodeJS":
                return '#02b814'
            
            case "SASS":
                return "#c16dc7"

            case "MongoDB":
                return "#075402"

            case "Redux":
                return "#590fd9"

            case "Express":
                return "#99ff00"

            case "Redux Forms":
                return "#f58607"

            case "TailwindCSS":
                return "#03fce8"

            case "Bootstrap":
                return "#0b03fc"

            default:
                return 'red';
        }
    }

    return isOpen ? (
        <Lightbox
            mainSrc={selectedImage.src}
            onCloseRequest={closeImageHandler}
            imageTitle={selectedImage.title}
        />
    ) : (
        <div className="project-details-container">
            <p className="date">{project.date_worked}</p>
            <div className="technologies">
                {project.technologies.map((tech, index) => (
                    <div key={tech+index} style={{
                        padding: '5px 15px',
                        fontFamily: 'sans-serif',
                        backgroundColor: getBackgroundColor(tech),
                        color: 'white',
                        borderRadius: '10px',
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        {tech}
                    </div>
                ))}
            </div>
            <div className="featured-image">
                <h2>{project.featured_image.title}</h2>
                <img onClick={() => imageClickHandler(project.featured_image)} src={project.featured_image.src} alt={project.featured_image.alt} />
            </div>
            <div className="involvement">
                <h2>My involvement</h2>
                {project.involvement}
            </div>
            {project.features.length > 0 ? (
                <div className="features">
                    <h2>Key Features</h2>
                    <ul>
                        {project.features.map((feature, index) => (
                            <li key={feature+index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            ): ""}
            <div className="images">
                <h2>More Images</h2>
                <p>Sensitive data has been pixelated</p>
                {project.images.map((image, index) => (
                    <div key={image.title+index} className="image-container">
                        <h4>{image.title}</h4>
                        <div onClick={() => imageClickHandler(image)} className="image">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectDetails
