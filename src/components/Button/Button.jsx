import React from 'react'
import "./Button.scss"

const Button = ({text, onClick}) => {
  return (
    <div className='button-type'>
      <button onClick={onClick}><h3>{text}</h3></button>
    </div>
  )
}

export default Button