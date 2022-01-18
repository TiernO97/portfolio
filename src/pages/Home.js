import React, { useRef } from 'react'
import Contact from '../components/Contact/Contact'
import Experience from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'
import About from '../components/home/About'
import Hero from '../components/home/Hero'
import Showcase from '../components/home/Showcase'
import Navbar from '../components/Navbar/Navbar'
import NavbarMobile from '../components/Navbar/NavbarMobile'

const Home = () => {

  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const goTo = section => {
    switch(section) {
      case "home":
        return window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})

      case "about":
        return aboutRef.current.scrollIntoView({
          behavior: "smooth"
        });

      case "projects":
        return projectsRef.current.scrollIntoView({
          behavior: "smooth"
        });

      case "experience":
        return experienceRef.current.scrollIntoView({
          behavior: "smooth"
        });

      case "contact":
        return contactRef.current.scrollIntoView({
          behavior: "smooth"
        });

      default:
        return window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
    }
  }

    return (
        <>
          <Navbar scrollTo={goTo} />  
          <NavbarMobile refProp={topRef} scrollTo={goTo} />
          <Hero title="Cian Tiernan" subtitle="Full Stack Developer" />
          <About refProp={aboutRef} />
          <Showcase refProp={projectsRef} />
          <Experience refProp={experienceRef} />
          <Contact refProp={contactRef} />
          <Footer />
        </>
    )
}

export default Home
