import React, {useState} from "react";
import ProjectTile from "./ProjectTile";
import Description from "./description"
import Modal from './Modals/ProjectModal'
function Project() {
 
  return (
    <div className="project-main">
      <ProjectTile title="Keeper App" description={Description[0]} src='./images/keeper2.png' stack={['NodeJS', 'Express','React', 'MongoDB']}/>
      <ProjectTile title='Travel and Tourism Management System' description={Description[1]} src='./images/tourismJava.png' stack={['Java', 'Swing']}/>
      <ProjectTile title='Blog Website' description={Description[2]} src='./images/journal.png' stack={['NodeJS', 'Express','EJS']}/>
      <ProjectTile title='Tetris' description={Description[3]} src='./images/tetris.png' stack={['Swift']}/>
    </div>
  );
}

export default Project;
