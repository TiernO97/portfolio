import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "../../styles/components/Navbar/Navbar.scss";

const Navbar = () => {

    const [hasScrolled, setHasScrolled] = useState(false);

    

    useEffect(() => {

        const listenToScroll = () => {
            const navbarOffset = 50;
            const currentScroll = window.pageYOffset;
            const isMobile = window.innerWidth < 1025;
            const showIcon = (currentScroll >= navbarOffset) && !isMobile;
    
            if(hasScrolled !== showIcon) {
                setHasScrolled(showIcon)
            }
        }

        window.addEventListener('scroll', listenToScroll)
        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }
    })

    const goTo = (x, y) => {
        window.scrollTo({
            top: y,
            left: x,
            behavior: 'smooth'
        });
    }

    return (
        <div className={`navbar-container ${hasScrolled ? "scrolled": ""}`}>
            <div className="navbar">
                <div className="cv-container">
                    <a href="/" className="cv-button">Download my CV!</a>
                </div>
                <nav>
                    <ul>
                        <li onClick={() => goTo(0, 0)}><NavLink to="/">Home</NavLink></li>
                        <li onClick={() => goTo(0, 800)}><NavLink to="/">About</NavLink></li>
                        <li onClick={() => goTo(0, 1136)}><NavLink to="/">Projects</NavLink></li>
                        <li onClick={() => goTo(0, 2245)}><NavLink to="/">Experience</NavLink></li>
                        <li onClick={() => goTo(0, document.body.scrollHeight)}><NavLink to="/">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default connect(null, {})(Navbar)
