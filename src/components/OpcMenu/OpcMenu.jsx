import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.scss"

const OpcMenu = ({ icon, name, iconName, navigate }) => {
  const navigation = useNavigate()

  return (
    <div id='containerOption' onClick={() => navigation(navigate)}>
        <img src={icon} alt={iconName} className='optionMenu' />
        <span>{name}</span>
    </div>
  )
}

export default OpcMenu