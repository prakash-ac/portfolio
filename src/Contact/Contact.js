import React from 'react';
import './Contact.css';
import twitter from  '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const contact = (props)=>{
    return (
        <div className="Contact">
            <div className="ContactSection">
                <p>Contact Me</p>
                <p>Mobile No.: +1 415-250-2641</p>
                <p>Email: prakas.ac@gmail.com</p>
            </div>
            <div className="Connect">
                <div className="ConnectSection">
                    <p>Connect me: </p>
                    <a href="https://twitter.com/home"><img className="Icons" src={twitter} alt="twitter"></img></a>
                    <a href="https://www.linkedin.com/in/prakash-acharya-dev/"><img className="Icons" src={linkedin} alt="linkedin"></img></a>
                    <a href="https://github.com/prakash-ac"><img className="Icons Github" src={github} alt="github"></img></a>
                </div>
            </div>
        </div>
    )
}

export default contact;