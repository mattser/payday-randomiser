import React from 'react'

const Throwable = ({weapon}) => {
  return (
    <div className='weapon'>
      <div className='weapon--column'>
        <h2>{weapon.Throwable}</h2>
        <h3> ({weapon.Pack})</h3>
      </div>
        <img src={"images/"+(weapon.Throwable.split(" ").join(""))+".png"} alt={weapon.Throwable} className="weapon--img"/>
    </div>
  )
}

export default Throwable