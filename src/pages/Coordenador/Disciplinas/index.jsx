import React, { useState }  from "react";
import MenuCoord from "../../../components/MenuCoord/MenuCoord";
import Header from "../../../components/Header/Header";
import SubCabecalho from "../../../components/SubCabecalho/SubCabecalho";
import Registro from "../../../components/Registro/Registro";
import "./styles.scss";
import ListaGlobal from "../../../components/ListaGlobal/ListaGlobal";

const Disciplinas = [
  { nome: "Matemática" },
  { nome: "Física" },
  { nome: "Química" },
  { nome: "Biologia" },
  { nome: "História" },
  { nome: "Geografia" },
  { nome: "Português" },
  { nome: "Inglês" },
  { nome: "Educação Física" },
  { nome: "Artes" },
];

const DisciplinasCoord = () => {

  const [registrar, setRegistrar] = useState(false)
  const forverdadeiro = true;

  const openRegistrar = () => {
    setRegistrar(true)
  }
  const closeRegistrar = () => {
    setRegistrar(false)
  }
  const eseforverdadeiro = true;
  return (
    <div id="containerDisciplinas">
      <MenuCoord />
      <main>
        <Header ldir="Início" adir="Disicplinas" />
        <div id="corpopai">
          <div id="cabecalho">
            <h1 id="textocab">Disicplinas</h1>
          </div>

          <SubCabecalho click={openRegistrar} />
          {registrar ? <Registro nameRegistro="Disciplina" quant="1" click={closeRegistrar} /> : <></>}
          {/* não resolvido a lista  */}
          <div id="lista"></div>
        </div>
      </main>
    </div>
  );
};

export default DisciplinasCoord;
