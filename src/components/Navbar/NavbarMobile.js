import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

// Styles
import "../../styles/components/Navbar/NavbarMobile.scss";

// Actions
import { setIsMobileMenuOpen } from "../../actions/utility";

// Assets
import menuIcon from "../../assets/Icons/bars-solid.svg";
import closeIcon from "../../assets/Icons/close-menu.svg";

const NavbarMobile = (props) => {

    const openClose = () => {
        props.setIsMobileMenuOpen(!props.isMobileMenuOpen)
    }

    const goTo = (section) => {
        props.scrollTo(section);

        openClose();
    }

    return (
        <div ref={props.refProp} className="navbar-mobile-container">
            <div className="navbar">
                <div className="button-container">
                    <a href="/" className="cv-button alt">CV</a>
                </div>
                <div className="menu-toggle" onClick={openClose}>
                    {props.isMobileMenuOpen ? <img src={closeIcon} alt="close menu" /> : <img src={menuIcon} alt="menu" />}
                </div>
            </div>
            <nav className={props.isMobileMenuOpen ? 'show' : ''}>
                <ul>
                <li><NavLink onClick={() => goTo("home")} to="/">Home</NavLink></li>
                <li><NavLink onClick={() => goTo("about")} to="/">About</NavLink></li>
                <li><NavLink onClick={() => goTo("projects")} to="/">Projects</NavLink></li>
                <li><NavLink onClick={() => goTo("experience")} to="/">Experience</NavLink></li>
                <li><NavLink onClick={() => goTo("contact")} to="/">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isMobileMenuOpen: state.utility.isMobileMenuOpen
    }
}

export default connect(mapStateToProps, {
    setIsMobileMenuOpen
})(NavbarMobile)
