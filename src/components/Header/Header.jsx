import React from 'react'
import SenacLogo from "../../img/logo-senac.png"
import Avatar from "../../img/Avatar.png"
import "./styles.scss"

const Header = ({ ldir, adir }) => {
  return (
    <div id='headerContainer'>
        <div id='diretorio'>
            <span>{ldir}</span>
            <span>&gt;</span>
            <span>{adir}</span>
        </div>
        <img src={SenacLogo} alt="mediotec-logo" />
        <div id='perfilContainer'>
            <img src={Avatar} alt="img-perfil" />
        </div>
    </div>
  )
}

export default Header