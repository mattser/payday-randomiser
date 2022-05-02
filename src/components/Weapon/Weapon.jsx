import React from 'react'
import "./Weapon.scss"

const Weapon = ({weapon}) => {

  const attachments = weapon.mods.map((mod,index) => <li key={index}>{mod.type}: {mod["Mod Name"]} ({mod.Pack})</li>)

  return (
    <div className='weapon'>
      <div className='weapon--column'>
        <h2>{weapon.name}</h2>
        <h3>{weapon.category} ({weapon.pack})</h3>
        <img src={"images/"+(weapon.name.split(" ").join(""))+".png"} alt={weapon.name} className="weapon--img"/>
      </div>
      <ul>
        {attachments}
      </ul>
      
    </div>
  )
}

export default Weapon