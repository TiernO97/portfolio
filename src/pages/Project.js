import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Assets
import projects from "../assets/files/projects";
import Footer from '../components/Footer/Footer';
import Hero from '../components/home/Hero';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';

const Project = () => {

    const params = useParams();
    const [project, setProject] = useState(null)

    useEffect(() => {
        let selectedProject = projects.find(project => project.slug === params.name)
        setProject(selectedProject)
    }, [params.name])

    return (
        <>
        {project && (
            <>
                <Hero title={project.name} subtitle={""} text={project.description} />
                <ProjectDetails project={project} />
                <Footer />
            </>
        )}
        </>
    )
}

export default Project
