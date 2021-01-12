import React from 'react';
import Certifications from './Certifications/Certifications';
import Degrees from './Degrees/Degrees';
import hat from '../assets/hat.jpg';
import './Education.css';

const education = (props) => {
    return(
        <React.Fragment>
            <div className="Education">
                <header>
                    <img className="Hat" src={hat} alt="graduation hat"></img>
                    <h3><strong>My Educational Background</strong></h3>
                </header>
                <div>
                    <Degrees/>
                </div>
                <Certifications/>
            </div>
        </React.Fragment>
    )
}

export default education;