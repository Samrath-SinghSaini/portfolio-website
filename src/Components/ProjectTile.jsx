function ProjectTile(props){
return <div className="project-content">
<div className="project-description">
  <h2 className="project-name">{props.title}</h2>
  <p>{props.description}</p>
  <button className="project-btn button" onClick={props.onBtnClick}>Learn More</button>
</div>
<img src={props.src} className="project-img" onClick={props.onBtnClick}></img>

</div>
}

export default ProjectTile