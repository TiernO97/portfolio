import React from "react";
import { Link } from "react-router-dom";

// Styles
import "../../styles/components/Home/projects.scss";

// Assets
import projects from "../../assets/files/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

const Showcase = (props) => {
  return (
    <div ref={props.refProp} className="projects-container">
      <div className="projects-heading">
        <h1>Projects</h1>
      </div>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <Link key={`project${index}`} to={`/project/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
        <p>I have also worked on partly on many other projects such as Cover in a Click, CMETB.ie and other web applications including a content managemnt system for an art gallery, a restaurant booking system and a data management web application for Teasgasc! For more details about my role in these, get in touch with me!</p>
      </div>
    </div>
  );
};

export default Showcase;
