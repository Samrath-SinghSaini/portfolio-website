import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
function ProjectModal(props) {
  return (
    <div className="overlay" onClick={props.onBtnClick}>
      <div className="modal-content">
        <div className="modal-title">
          <h2 className="modal-heading">Project Title</h2>
          <button className="close-modal-btn" onClick={props.onBtnClick}>
            <CloseIcon fontSize="large" />
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-description">
            <p>
              'I was the youngest pilot in Pan Am history. When I was four, the
              pilot let me ride in the cockpit and fly the plane with him. And I
              was four, and I was great and I would have landed it, but my dad
              wanted us to go back to our seats.Guess what? I have flaws. What
              are they? Oh I donno, I sing in the shower? Sometimes I spend too
              much time volunteering. Occasionally I\'ll hit somebody with my
              car. So sue me no, don\'t sue me. That is opposite the point I\'m
              trying to make.'
            </p>
          </div>
          <img src="./images/keeper2.png" className="modal-img"></img>
        </div>
        <div className="modal-footer">
          <div className="stack-div">
            <p className="stack-p">Made Using:</p>
            <span className="stack" style={{ backgroundColor: "blue" }}>
              Node JS
            </span>
            <span className="stack" style={{ backgroundColor: "green" }}>
              MongoDB
            </span>
            <span className="stack" style={{ backgroundColor: "red" }}>
              React
            </span>
          </div>
          <button className="code-btn">Source Code</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
