import React from 'react';
import './About.css';
import me from '../assets/me.jpeg'; 


const about = (props)=>{
    return (
        <div className="About">
            <div>
                <img className="Profile" src={me} alt="my profile"></img>
            </div>
            <section className="Me">
                <p className="Para">
                    I am <strong>Prakash Acharya</strong>. I am a computer science student at city college of san Francisco. 
                    I am working towards my associate degree in computer science and planning to transfer to university for my BS in Computer Science. 
                    Last summer, I got an opportunity to participate in the Salesforce pathfinder training program and 
                    gained hands-on skills working in the Salesforce Ecosystem and got certified by Salesforce as a platform developer.<br/><br/>

                    Originally, I am from Nepal. In my career journey, I have been a middle school computer teacher in Nepal, 
                    an automatic machine operator in South Korea, and here in the united states I have been working in the hospitality and retail industry and possess more than four years of customer service experience.<br/><br/>

                    I am looking for an opportunity to work in the Salesforce ecosystem. <br/><br/>

                    I love hiking and spending time with nature. 

                </p>
            </section>
        </div>
    )
}

export default about;
