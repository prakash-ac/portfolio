import React from 'react';
import './Degrees.css';

const degrees = () =>{
    return(
        <div className="Degrees">
             <h3 className="H3">Degrees</h3>
            <div className="Degree">
                <p>City College of San Francisco &emsp; January 2017 – December 2020 </p>
                <p>Associate Degree in Computer Science, GPA: 3.74, Dean’s List</p>
            </div>

            <div className="Degree">
                <p>Tribhuwan University &emsp; November 2007 - June 2010</p>
                <p>Bachelor’s Degree in English Literature</p>
            </div>
        </div>
    )
}

export default degrees;