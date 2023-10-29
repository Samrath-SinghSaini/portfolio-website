import React, {useState} from "react";
import ProjectTile from "./ProjectTile";
import Description from "./description"
import Modal from './Modals/ProjectModal'
function Project() {
 
  return (
    <div className="project-main">
    <p className="project-note">Please note that the projects are hosted on a free service with a shared plan, website will take longer to load.</p>
    <ProjectTile title="Electronic Ecommerce Store Application" description={Description[4]} src='./images/ecom6.png' stack={['NodeJS', 'Express','React', 'MongoDB']} link='https://electronic-ecommerce-store.vercel.app/'/>
      <ProjectTile title="Keeper App" description={Description[0]} src='./images/keeper.png' stack={['NodeJS', 'Express','React', 'MongoDB']}/>
      <ProjectTile title='Travel and Tourism Management System' description={Description[1]} src='./images/tourismJava.png' stack={['Java', 'Swing']}/>
      <ProjectTile title='Blog Website' description={Description[2]} src='./images/journal.png' stack={['NodeJS', 'Express','EJS']}/>
      <ProjectTile title='Tetris' description={Description[3]} src='./images/tet.png' stack={['Swift']}/>
    </div>
  );
}

export default Project;
