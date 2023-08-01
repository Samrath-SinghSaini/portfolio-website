import React from "react";
import Skill from './Skill'
function About() {
  return (
    <div className="about-main">
    <div className="about-content">
      <h1 className="about-heading heading">About</h1>
      <img src="./images/saini.jpg" className="about-profile-img"></img>
      <p className="about-description">
        An aspiring Full Stack Developer based in British Columbia with a diploma from Georgian College. I am currently looking for all positions web and software development. My core tech stack includes Java, HTML, CSS, Vanilla JS, Node JS, Express, React and databases like MongoDB and SQL. I love writing code and building things that make me expand my knowledge and skills.
      </p>
      </div>
      <div className="education-container">
        <h2>Education</h2>
        <div className="program-div">
        <h3 className="program-text">Computer Programmer Diploma</h3>
        <p className="program-text">January 2020 - January 2022</p>
        <p className="program-text"><a href="https://www.georgiancollege.ca/">Georgian College • Barrie, ON</a></p>
        </div>
       
      </div>
      <h2 className="heading">Skills</h2>
      <div className="skill-container">
      
      <Skill skill='Java' src='./images/java.png'/>
      <Skill skill='Javascript' src='./images/javascript.png'/>
      <Skill skill='NodeJS' src='./images/nodeJS.png'/>
      <Skill skill='MongoDB' src='./images/mongo.png'/>
      <Skill skill='Express' src='./images/express.png'/>
      <Skill skill='EJS' src='./images/ejs.png'/>
      <Skill skill='React' src='./images/react.png'/>
      <Skill skill='SQL' src='./images/sql.png'/>
      <Skill skill='Swift' src='./images/swift.png'/>
      <Skill skill='Jira' src='./images/jira.png'/>
      <Skill skill='Git' src='./images/git.png'/>
      </div>
      <div className="current-container">
      <h2 className="current">Currently: </h2>
      <p className="current">I am completing the MERN stack, taking Harvard's CS50 course, grinding leetcode and probably having a coffee.</p>
      </div>
    </div>
  );
}

export default About;
