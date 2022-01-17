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

    const goTo = (x, y) => {
        window.scrollTo({
            top: y,
            left: x,
            behavior: 'smooth'
        });

        openClose();
    }

    return (
        <div className="navbar-mobile-container">
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
                <li><NavLink onClick={() => goTo(0,0)} to="/">Home</NavLink></li>
                <li><NavLink onClick={() => goTo(0,800)} to="/">About</NavLink></li>
                <li><NavLink onClick={() => goTo(0,1335)} to="/">Projects</NavLink></li>
                <li><NavLink onClick={() => goTo(0,2666)} to="/">Experience</NavLink></li>
                <li><NavLink onClick={() => goTo(0,4245)} to="/">Contact</NavLink></li>
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
