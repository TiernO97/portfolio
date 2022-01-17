import React from "react";
import { Link } from "react-router-dom";

// Styles
import "../../styles/components/Home/projects.scss";

// Assets
import projects from "../../assets/files/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

const Showcase = () => {
  return (
    <div className="projects-container">
      <div className="projects-heading">
        <h1>Projects</h1>
      </div>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <Link key={`project${index}`} to={`/project/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
