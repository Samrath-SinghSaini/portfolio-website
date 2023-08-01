/* eslint-disable no-unused-vars */
import React, {useRef} from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About"
import Contact from "./Components/Contact" 
import Project from "./Components/Project";
import Main from "./Components/Main"

function App() {
  const projectRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  function scrollToComponent(containerRef){
    containerRef.current.scrollIntoView({behavior:"smooth"})
  }

  return (
    <>
      <Header ref={[projectRef,aboutRef, contactRef]} scrollToComponent={scrollToComponent}/>
      <div className="root-container">
        <div className="main-container"><Main ref={[projectRef, contactRef]} scrollToComponent={scrollToComponent} /></div>
        <div className="about-container" ref={aboutRef}><About/></div>
        <div className="project-container" ref={projectRef}>
          <h1 className="heading">Projects</h1>
        <Project/>
        </div>
        <div className="contact-container" ref={contactRef}><Contact/></div>
        <div className="footer-container"><Footer /></div>
      </div>
    </>
  );
}

export default App;
