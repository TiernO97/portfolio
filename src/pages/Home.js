import React from 'react'
import Contact from '../components/Contact/Contact'
import Experience from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'
import About from '../components/home/About'
import Hero from '../components/home/Hero'
import Showcase from '../components/home/Showcase'
import Navbar from '../components/Navbar/Navbar'
import NavbarMobile from '../components/Navbar/NavbarMobile'

const Home = () => {
    return (
        <>
          <Navbar />  
          <NavbarMobile />
          <Hero title="Cian Tiernan" subtitle="Full Stack Developer" />
          <About />
          <Showcase />
          <Experience />
          <Contact />
          <Footer />
        </>
    )
}

export default Home
