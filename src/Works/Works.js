import React from 'react';
import './Works.css';


const works = (props)=>{
    return (
        <div className="Works">
            <div className="Work">
            <p><strong>UApp</strong></p>
            <p>An app in Salesforce that will allow a university to streamline applications for admission from prospective students (on progress).</p>
            </div>

            <div className="Work">
                <p><strong>TaskOrganizer</strong></p>
                <p>An app designed using MVC design pattern and developed using Java and JavaFX that will help users create and manage tasks.</p>
            </div>

            <div className="Work">
                <p><strong>BudgetApp</strong></p>
                <p>An app designed using MVC design pattern and developed using Java and JavaFX that will help users create and manage tasks.</p>
            </div>
        </div>
    )
}

export default works;