import React from 'react'
import Contact from '../components/Contact/Contact'
import Experience from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'
import About from '../components/home/About'
import Hero from '../components/home/Hero'
import Showcase from '../components/home/Showcase'

const Home = (props) => {

    return (
        <>
          <Hero title="Cian Tiernan" subtitle="Full Stack Developer" />
          <About refProp={props.aboutRef} />
          <Showcase refProp={props.projectsRef} />
          <Experience refProp={props.experienceRef} />
          <Contact refProp={props.contactRef} />
          <Footer />
        </>
    )
}

export default Home
