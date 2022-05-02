import React from 'react'
import "./Melee.scss"

const Melee = ({weapon}) => {
  return (
    <div className='weapon'>
      <div className='weapon--column'>
        <h2>{weapon.Name}</h2>
        <h3> ({weapon.Pack})</h3>
      </div>
        <img src={"images/"+(weapon.Name.split(" ").join(""))+".png"} alt={weapon.Name} className="weapon--img"/>
    </div>
  )
}

export default Melee