import React from 'react'

function Footer(){
    let year = new Date().getFullYear()
    return <div className='footer-main'>
    <p className='footer-text'>This website was built using - React ⚛️</p>
    <p className='footer-text'>Made by Samrath Singh Saini - {year}</p>
    </div>
}
export default Footer