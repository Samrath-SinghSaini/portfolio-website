import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
function ProjectModal(props) {
  console.log(props.stack);
  return (
    <div className="overlay" onClick={props.onBtnClick}>
      <div className="modal-content">
        <div className="modal-title">
        <button className="close-modal-btn" onClick={props.onBtnClick}>
            <CloseIcon fontSize="large" />
          </button>
          <h2 className="modal-heading">{props.title}</h2>
          
        </div>
        <div className="modal-body">
          <div className="modal-description">
            <p>{props.description}</p>
            <button className="code-btn" onClick={()=>{window.open('https://github.com/Samrath-SinghSaini', '_blank')}}>Source Code</button>
          </div>
          <img
              src={props.src}
              className="modal-img"
              style={{ maxWidth: "600px" }}
            ></img>
        </div>
        <div className="modal-footer">
            <div className="stack-div">
              <p className="stack-p">Made Using:</p>
              {props.stack.map((element) => {
                return (
                  <span className="stack" style={{ backgroundColor: "#526D82" }}>
                    {element}
                  </span>
                );
              })}
            </div>
            
          </div>
      </div>
    </div>
  );
}

export default ProjectModal;
