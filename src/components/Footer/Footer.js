import React from 'react';

// Styles
import "../../styles/components/Footer/Footer.scss";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <p>Copyright &copy; {new Date().getFullYear()} Cian Tiernan</p>
            </div>
        </div>
    )
}

export default Footer
