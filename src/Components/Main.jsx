import React from "react";

const Main = React.forwardRef(function Main(props, ref) {
  const [projectRef, contactRef] = ref;
  return (
    <div className="main-div">
      <div className="main-content">
        <h1 className="main-heading">Hello, <br className="line-br"></br>My name is Samrath</h1>
        <h3 className="main-description">I'm a Full-Stack Developer</h3>
        <div className="main-btn-div">
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
        <button className="main-btn" onClick={()=>window.open("https://drive.google.com/file/d/1QWoin0n5WiweTqahkEI3QD7dXHJz-iMV/view?usp=sharing",'_blank')}>Download Resume</button>
        </div>
      </div>
      <img src="./images/mainImg.png" className="splash-img"></img>
    </div>
  );
});

export default Main;
