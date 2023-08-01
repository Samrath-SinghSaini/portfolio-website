import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = React.forwardRef((props, ref)=> {
  const [projectRef, aboutRef, contactRef] = ref
  
  return (
    <div className="header-main">
      <button className="header-btn header-icon">SSS</button>
      <div className="nav-btn">
        <button className="header-btn" onClick={()=>{props.scrollToComponent(projectRef)}}>Projects</button>
        <button className="header-btn" onClick={()=>{props.scrollToComponent(aboutRef)}}>About</button>
        <button className="header-btn contact-btn" onClick={()=>{props.scrollToComponent(contactRef)}}>Contact</button>
        {/* <button className="header-btn git-icon">
          <GitHubIcon />
        </button> */}
      </div>
    </div>
  );
})

export default Header;
