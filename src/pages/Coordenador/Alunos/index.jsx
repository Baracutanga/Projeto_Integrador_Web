import React, { useEffect, useState } from "react";
import MenuCoord from "../../../components/MenuCoord/MenuCoord";
import Header from "../../../components/Header/Header";
import SubCabecalho from "../../../components/SubCabecalho/SubCabecalho";
import Registro from "../../../components/Registro/Registro";
import "./styles.scss";
import ListaGlobal from "../../../components/ListaGlobal/ListaGlobal";
import axios from "axios";

const Alunos = [
  { nome: "Ana Silva", email: "ana.silva@example.com" },
  { nome: "Bruno Souza", email: "bruno.souza@example.com" },
  { nome: "Carlos Oliveira", email: "carlos.oliveira@example.com" },
  { nome: "Daniela Lima", email: "daniela.lima@example.com" },
  { nome: "Eduardo Santos", email: "eduardo.santos@example.com" },
  { nome: "Fernanda Costa", email: "fernanda.costa@example.com" },
  { nome: "Gabriel Almeida", email: "gabriel.almeida@example.com" },
  { nome: "Helena Ramos", email: "helena.ramos@example.com" },
  { nome: "Igor Ferreira", email: "igor.ferreira@example.com" },
  { nome: "Julia Martins", email: "julia.martins@example.com" },
];

const AlunosCoord = () => {
  const [registrar, setRegistrar] = useState(false);
  const [alunoData, setAlunoData] = useState([]);

  useEffect(() => {
    const URL = "https://backendpi-7ekz.onrender.com/api";
    const token = localStorage.getItem("token");

    axios
      .get(`${URL}/aluno/alunos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        setAlunoData(data);
      })
      .catch((err) => console.error(err));
  });

  const openRegistrar = () => {
    setRegistrar(true);
  };

  const closeRegistrar = () => {
    setRegistrar(false);
  };

  return (
    <div id="containerAlunos">
      <MenuCoord />
      <main>
        <Header ldir="Início" adir="Alunos" />

        <div id="corpopai">
          <div id="cabecalho">
            <h1 id="textocab">Aluno</h1>
          </div>

          <SubCabecalho click={openRegistrar} />
          {registrar ? (
            <Registro nameRegistro="Aluno" quant="4" click={closeRegistrar} />
          ) : (
            <></>
          )}
          <ListaGlobal objeto={alunoData} />
        </div>
      </main>
    </div>
  );
};

export default AlunosCoord;
