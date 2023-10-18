import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
function ImageModal(props){
    function onBtnClick(){
        props.onBtnClick()
    }
    return <div className='overlay' onClick={onBtnClick} >
    <div className='image-modal-container'>
        
        <img src={props.src} className='img-modal' onClick={onBtnClick}></img>
    </div>
    </div>
}
export default ImageModal
