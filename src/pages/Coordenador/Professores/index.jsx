import React from "react";
import MenuCoord from "../../../components/MenuCoord/MenuCoord";
import Header from "../../../components/Header/Header";
import SubCabecalho from "../../../components/SubCabecalho/SubCabecalho";
import "./styles.scss";
import ListaGlobal from "../../../components/ListaGlobal/ListaGlobal";
import Registro from "../../../components/Registro/Registro";

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
  const forverdadeiro = true;
  return (
    <div id="containerProfessores">
      <MenuCoord />
      <main>
        <Header ldir="Início" adir="Professores" />
        <div id="corpopai">
          <div id="cabecalho">
            <h1 id="textocab">Professores</h1>
          </div>

          <SubCabecalho />
          <Registro nameRegistro="Professor" quant="4" />
          {/* não resolvido a lista  */}
          <div id="lista"></div>
        </div>
      </main>
    </div>
  );
};

export default ProfessoresCoord;
