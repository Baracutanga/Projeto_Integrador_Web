import React, { useState } from "react";
import MenuCoord from "../../../components/MenuCoord/MenuCoord";
import Header from "../../../components/Header/Header";
import SubCabecalho from '../../../components/SubCabecalho/SubCabecalho'
import Registro from '../../../components/Registro/Registro'
import "./styles.scss";
import ListaGlobal from "../../../components/ListaGlobal/ListaGlobal";

const Professores = [
  { nome: "Marcos Silva", email: "marcos.silva@example.com" },
  { nome: "Patrícia Souza", email: "patricia.souza@example.com" },
  { nome: "Roberto Oliveira", email: "roberto.oliveira@example.com" },
  { nome: "Sabrina Lima", email: "sabrina.lima@example.com" },
  { nome: "André Santos", email: "andre.santos@example.com" },
  { nome: "Carla Costa", email: "carla.costa@example.com" },
  { nome: "Fábio Almeida", email: "fabio.almeida@example.com" },
  { nome: "Mariana Ramos", email: "mariana.ramos@example.com" },
  { nome: "Lucas Ferreira", email: "lucas.ferreira@example.com" },
  { nome: "Beatriz Martins", email: "beatriz.martins@example.com" },
];

const ProfessoresCoord = () => {
  const [registrar, setRegistrar] = useState(false)
  const forverdadeiro = true;

  const openRegistrar = () => {
    setRegistrar(true)
  }
  const closeRegistrar = () => {
    setRegistrar(false)
  }

  return (
    <div id="containerProfessores">
      <MenuCoord />
      <main>
        <Header ldir="Início" adir="Professores" />
        <div id="corpopai">
          <div id="cabecalho">
            <h1 id="textocab">Professores</h1>
          </div>

          <SubCabecalho click={openRegistrar} />
          {registrar ? <Registro nameRegistro="Professor" quant="4" click={closeRegistrar} /> : <></>}
          {/* não resolvido a lista  */}
          <div id="lista"></div>
        </div>
      </main>
    </div>
  );
};

export default ProfessoresCoord;
