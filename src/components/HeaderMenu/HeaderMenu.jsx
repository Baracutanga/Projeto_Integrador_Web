import React from 'react'
import "./styles.scss"
import MediotecLogo from "../../img/mediotec-logo.png";

const HeaderMenu = ({ user }) => {
  return (
    <div id='containerHeader'>
      <img src={MediotecLogo} alt="Logo Mediotec" id="mediotecLogo" />  
      <span id='userType'>{user}</span>
    </div>
  )
}

export default HeaderMenu