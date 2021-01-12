import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';


const nav = (props) => {
    return (
        <nav className="Nav">
            <ul className="NavLinks">
                <NavLink className="NavItem" to="/">
                    <li>About Me</li>
                </NavLink>

                <NavLink className="NavItem" to="/education">
                    <li>Education</li>
                </NavLink>

                <NavLink className="NavItem" to="/works">
                    <li>My Works</li>
                </NavLink>

                <NavLink className="NavItem" to="/contact">
                    <li>Contact Me</li>
                </NavLink>
                
            </ul>
        </nav>
    )
}

export default nav;