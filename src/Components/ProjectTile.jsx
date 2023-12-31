import React, {useEffect, useState} from 'react'
import Modal from './Modals/ProjectModal'
import ImageModal from './Modals/ImageModal'
function ProjectTile(props){

  const [displayModal, setDisplayModal] = useState(false)
  const [displayImageModal, setImageModal]= useState(false)
  const [showLiveLink, setLiveLink] = useState(false)
  function showModal(){
    (!displayModal) ?setDisplayModal(true) : setDisplayModal(false)
  }
  function showImageModal(){
    (!displayImageModal) ? setImageModal(true) : setImageModal(false)
  }
  useEffect(()=>{
    if(props.link){
      setLiveLink(true)
    }
  }, [])

return <div className="project-content">
<div className="project-description">
  <h2 className="project-name secondary-heading">{props.title}</h2>
  <p>{props.description}</p>
  <button className="project-btn button" onClick={showModal}>Learn More</button>
  <button className="project-btn button" onClick={()=>{window.open(props.link, '_blank')}} style={{display: showLiveLink ? 'inline-block' : 'none'}}>Live Link</button>

</div>
<img src={props.src} className="project-img" onClick={showImageModal}></img>
{displayModal ? <Modal title={props.title} description={props.description} src={props.src}onBtnClick={showModal} stack={props.stack} /> : null}
{displayImageModal ? <ImageModal src={props.src} onBtnClick={showImageModal} /> : null}
</div>
}

export default ProjectTile