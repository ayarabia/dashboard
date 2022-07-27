import React from 'react'

function Card(props) {
  return (
    <div className='rounded-3 shadow px-4 py-3 bg-white text-center me-3' style={{color:`${props.color}`}} >
 <i className={`${props.iconType} ${props.iconName} fa-2x `} ></i>
    <span className='d-block fs-4 fw-bold my-2' style={{color:'#6C7383'}}> {props.heading}</span>
    <p className='mb-0'>{props.subHeading}</p>
</div>
  )
}

export default Card