import React, { useState } from "react";
import SenacLogo from "../../img/logo-senac.png";
import Avatar from "../../img/Avatar.png";
import "./styles.scss";
import PopUp from "../PopUp/PopUp";

const Header = ({ ldir, adir }) => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true)
  }

  return (
    <div id="headerContainer">
      <div id="diretorio">
        <span>{ldir}</span>
        <span>&gt;</span>
        <span>{adir}</span>
      </div>
      <img src={SenacLogo} alt="mediotec-logo" />
      <div id="perfilContainer" onClick={handlePress}>
        <img src={Avatar} alt="img-perfil" />
        {pressed ? <PopUp /> : <></>}
      </div>
    </div>
  );
};

export default Header;
