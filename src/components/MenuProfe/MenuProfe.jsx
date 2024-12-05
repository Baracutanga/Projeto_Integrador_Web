import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import OpcMenu from "../OpcMenu/OpcMenu";
import HomeIcon from "../../img/icons/inicio.svg";
import ComunicadosIcon from "../../img/icons/comunicados.svg";
import ConceitosIcon from "../../img/icons/conceitos.svg";
import "./styles.scss";

const MenuProfe = () => {
  return (
    <div id="containerMenu">
      <HeaderMenu user="Professor" />
      <hr />
      <OpcMenu
        name="Início"
        icon={HomeIcon}
        iconName="inicio-icon"
        navigate="../../Professor/Inicio/"
      />
      <OpcMenu
        name="Comunicados"
        icon={ComunicadosIcon}
        iconName="comunicados-icon"
        navigate="../../Professor/Comunicados/"
      />
      <OpcMenu
        name="Conceitos"
        icon={ConceitosIcon}
        iconName="conceitos-icon"
        navigate="../../Professor/Conceitos/"
      />
      <hr />
    </div>
  );
};

export default MenuProfe;
