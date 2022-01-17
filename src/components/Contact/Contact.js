import React from 'react';
import { Mail, Phone, Linkedin } from "react-feather";

// Styles
import "../../styles/components/Contact/Contact.scss";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Get in touch!</h1>
            <div className="contact-content">
                <div className="contact-block">
                    <Mail color="#233573" />
                    <a href="mailto:ciantiernan1997@gmail.com">ciantiernan1997@gmail.com</a>
                </div>
                <div className="contact-block">
                    <Phone color="#233573" />
                    <a href="tel:353860303129">+353 86 030 3129</a>
                </div>
                <div className="contact-block">
                    <Linkedin color="#233573" />
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ciantiernan/">Click here!</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
