import React from "react";

const Main = React.forwardRef(function Main(props, ref) {
  const [projectRef, contactRef] = ref;
  return (
    <div className="main-div">
      <div className="main-content">
        <h1 className="main-heading">Hello, My name is Samrath</h1>
        <h3 className="main-description">I'm a Full-Stack Developer</h3>
        <button
          className="main-btn"
          onClick={() => {
            props.scrollToComponent(projectRef);
          }}>My Work</button>
        <button
          className="main-btn"
          onClick={() => {
            props.scrollToComponent(contactRef);
          }}
        >Send me a message
        </button>
        <button className="main-btn" onClick={()=>window.open("https://drive.google.com/file/d/1dobAFT9yBx3MEvKblNzR7WSxDPC6Veap/view?usp=sharing",'_blank')}>Download Resume</button>
      </div>
      <img src="./images/mainImg.png" className="splash-img"></img>
    </div>
  );
});

export default Main;
