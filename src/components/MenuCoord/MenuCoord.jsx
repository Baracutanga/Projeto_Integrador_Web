import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import OpcMenu from "../OpcMenu/OpcMenu";
import HomeIcon from "../../img/icons/inicio.svg";
import ComunicadosIcon from "../../img/icons/comunicados.svg";
import AlunosIcon from "../../img/icons/alunos.svg";
import ConceitosIcon from "../../img/icons/conceitos.svg";
import ProfessoresIcon from "../../img/icons/professors.svg";
import TurmasIcon from "../../img/icons/turmas.svg";
import DisciplinasIcon from "../../img/icons/disciplinas.svg";
import CoordenadoresIcon from "../../img/icons/coordenadores.svg";
import "./styles.scss";

const MenuCoord = () => {
  return (
    <div id="containerMenu">
      <HeaderMenu user="Coordenador" />
      <hr />
      <OpcMenu
        name="Início"
        icon={HomeIcon}
        iconName="inicio-icon"
        navigate="../../Coordenador/Inicio/"
      />
      <OpcMenu
        name="Comunicados"
        icon={ComunicadosIcon}
        iconName="comunicados-icon"
        navigate="../../Coordenador/Comunicados/"
      />
      <OpcMenu
        name="Conceitos"
        icon={ConceitosIcon}
        iconName="conceitos-icon"
        navigate="../../Coordenador/Conceitos/"
      />
      <OpcMenu
        name="Alunos"
        icon={AlunosIcon}
        iconName="alunos-icon"
        navigate="../../Coordenador/Alunos/"
      />
      <OpcMenu
        name="Professores"
        icon={ProfessoresIcon}
        iconName="professores-icon"
        navigate="../../Coordenador/Professores/"
      />
      <OpcMenu
        name="Coordenadores"
        icon={CoordenadoresIcon}
        iconName="coordenadores-icon"
        navigate="../../Coordenador/Coordenadores"
      />
      <OpcMenu
        name="Turmas"
        icon={TurmasIcon}
        iconName="turmas-icon"
        navigate="../../Coordenador/Turmas/"
      />
      <OpcMenu
        name="Disciplinas"
        icon={DisciplinasIcon}
        iconName="disciplinas-icon"
        navigate="../../Coordenador/Disciplinas/"
      />
      <hr />
    </div>
  );
};

export default MenuCoord;
