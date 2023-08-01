import React, {useState} from "react";
import ProjectTile from "./ProjectTile";
import Description from "./description"
import Modal from './Modals/ProjectModal'
function Project() {
  const [displayModal, setDisplayModal] = useState(false)
  function showModal(){
    (!displayModal) ?setDisplayModal(true) : setDisplayModal(false)
  }
  return (
    <div className="project-main">
      <div className="project-content">
        <div className="project-description">
          <h2 className="project-name">Keeper App</h2>
          <p>
            I donno I think I have done absolutely everything you can do to
            prepare for the day. I've updated our contacts, I have gotten quotes
            from supplies, I have sent out an e-vite, for our big, grand opening
            pancake luncheon. Six yes's, one maybe, only eleven no's. And seven
            hundred and eighty-eight not-yet-replied's but! Of that group, seven
            hundred and eighty-two have viewed it.
          </p>
        </div>
        <img src="./images/keeper2.png" className="project-img"></img>
      </div>
      <ProjectTile title='E-Commerce App' description={Description[0]} src='./images/keeper2.png' onBtnClick={showModal}/>
      <ProjectTile title='Spotify Stats App' description={Description[0]} src='./images/keeper2.png' onBtnClick={showModal}/>
      <ProjectTile title='Bug Tracker Java' description={Description[0]} src='./images/keeper2.png' onBtnClick={showModal}/>
      {displayModal ? <Modal onBtnClick={showModal}/> : null}
    </div>
  );
}

export default Project;
