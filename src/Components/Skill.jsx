import React from 'react'

function Skill(prop){
    console.log(prop.src)
    return <div className='skill'>
    <img src={prop.src} className='skill-img'></img>
    <p className='skill-name'>{prop.skill}</p>

    </div>
}
export default Skill