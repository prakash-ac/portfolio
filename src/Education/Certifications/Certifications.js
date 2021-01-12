import React from 'react';
import './Certifications.css';
import linuxLogo from '../../assets/linux-icon.png';
import javaLogo from '../../assets/java-icon.png';
import pd1Logo from '../../assets/pd1.png';

const certifications = (props) => {

    return(
        <div className="Certifications">
            <h3 className="H3">Certificates</h3>
            <div className="Certificate">
                <img className="Image" src={linuxLogo} alt="Linux Logo"></img>
                <p className="Title">Certificate of Achievement, Linux Administration (CCSF)</p>
            </div>
            <div className="Certificate">
                <img className="Image" src={javaLogo} alt="Linux Logo"></img>
                <p className="Title">Certificate of Achievement, Java Programming (CCSF)</p>
            </div>
            <div className="Certificate">
                <img className="Image" src={pd1Logo} alt="Linux Logo"></img>
                <p className="Title">Platform Developer 1, Salesforce Certified</p>
            </div>
        </div>
    )
}

export default  certifications;