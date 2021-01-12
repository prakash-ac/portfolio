import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


const nav = (props) => {

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
    }

    return (
        <nav className="Nav">
            <ul className="NavLinks">

                <Link to="/about" style={linkStyle}>
                    <li>About Me</li>
                </Link>

                <Link to="/education" style={linkStyle}>
                    <li>Education</li>
                </Link>

                <Link to="/works" style={linkStyle}>
                    <li>My Works</li>
                </Link>

                <Link to="/contact" style={linkStyle}>
                    <li>Contact Me</li>
                </Link>
                
            </ul>
        </nav>
    )
}

export default nav;