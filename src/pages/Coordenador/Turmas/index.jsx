import React, { useState } from "react";
import MenuCoord from "../../../components/MenuCoord/MenuCoord";
import Header from "../../../components/Header/Header";
import SubCabecalho from '../../../components/SubCabecalho/SubCabecalho'
import Registro from '../../../components/Registro/Registro'
import "./styles.scss";
import ListaGlobal from "../../../components/ListaGlobal/ListaGlobal";

const Turmas = [
  { nome: "1º Ano - A", turno: "Manhã" },
  { nome: "1º Ano - B", turno: "Tarde" },
  { nome: "2º Ano - A", turno: "Manhã" },
  { nome: "2º Ano - B", turno: "Tarde" },
  { nome: "3º Ano - A", turno: "Manhã" },
  { nome: "3º Ano - B", turno: "Tarde" },
  { nome: "4º Ano - A", turno: "Noite" },
  { nome: "4º Ano - B", turno: "Noite" },
  { nome: "5º Ano - A", turno: "Manhã" },
  { nome: "5º Ano - B", turno: "Tarde" }
];

const TurmasCoord = () => {
  const [registrar, setRegistrar] = useState(false)
  const forverdadeiro = true;

  const openRegistrar = () => {
    setRegistrar(true)
  }
  const closeRegistrar = () => {
    setRegistrar(false)
  }

  return (
    <div id="containerTurmas">
      <MenuCoord />
      <main>
        <Header ldir="Início" adir="Turmas" />
        <div id="corpopai">
          <div id="cabecalho">
            <h1 id="textocab">Turmas</h1>
          </div>

          <SubCabecalho click={openRegistrar} />
          {registrar ? <Registro nameRegistro="Turma" quant="2" click={closeRegistrar} /> : <></>}
          {/* não resolvido a lista  */}
          <div id="lista">
          </div>
        </div>
      </main>
    </div>
  );
};

export default TurmasCoord;
