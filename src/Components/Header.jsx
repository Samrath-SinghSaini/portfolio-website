import React, {useState} from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import Mail from '@mui/icons-material/MailOutline';
import DataObjectIcon from '@mui/icons-material/DataObject';
const Header = React.forwardRef((props, ref)=> {
  const [menu, showMenu]=useState(false)
  const [projectRef, aboutRef, contactRef] = ref
  let iconStyles = {'margin-top': '-10px',
    'position': 'relative',
    'top': '5px',
    'font-size': 'x-large'}

    function setMenu(){
      !menu ? showMenu(true) : showMenu(false)  
    }
    function openGitHub(){
      window.open('https://github.com/Samrath-SinghSaini')
    }
    function openLinkedIn(){
      window.open('https://www.linkedin.com/in/samrath-singh-saini-b50508200/')
    }
  return (
    <div className="header-main">
      <button className="header-btn header-icon menu-icon" onClick={()=>{window.location.href='/'}}><DataObjectIcon/></button>
      <button className="header-btn " onClick={()=>{}}><GitHubIcon className="social-btn"/></button>
      <button className="header-btn " onClick={()=>{openLinkedIn}}><LinkedInIcon className="social-btn"/></button>
      <div className="nav-btn">
        <button className="header-btn" onClick={()=>{props.scrollToComponent(projectRef)}}>Projects</button>
        <button className="header-btn" onClick={()=>{props.scrollToComponent(aboutRef)}}>About</button>
        <button className="header-btn contact-btn" onClick={()=>{props.scrollToComponent(contactRef)}}>Contact</button>
        <div className="menu-div"><button className="header-btn menu-icon"onClick={setMenu}><MenuIcon className="nav-menu"/></button></div>
       
        
        {/* <button className="header-btn git-icon">
          <GitHubIcon />
        </button> */}
      </div>
      <div className="nav-dropdown" style={menu ?{display:'block'}:{display:'none'}}>
          <button className="dropdown-btn" onClick={openLinkedIn}>LinkedIn <LinkedInIcon style={{fontSize:'larger', marginBottom:'-5px'}}/></button>
          <button className="dropdown-btn" onClick={openGitHub}>GitHub <GitHubIcon style={{fontSize:'larger', marginBottom:'-5px'}}/></button>
          <button className="dropdown-btn">Contact <Mail style={{fontSize:'larger', marginBottom:'-5px'}} onClick={()=>{props.scrollToComponent(contactRef)}}/></button>
        </div>
    </div>
  );
})

export default Header;
