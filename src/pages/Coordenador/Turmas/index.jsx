import React, { useState, useEffect } from "react";
import MenuCoord from "../../../components/MenuCoord/MenuCoord";
import Header from "../../../components/Header/Header";
import SubCabecalho from "../../../components/SubCabecalho/SubCabecalho";
import Registro from "../../../components/Registro/Registro";
import "./styles.scss";
import ListaGlobal from "../../../components/ListaGlobal/ListaGlobal";
import axios from "axios";

const TurmasCoord = () => {
  const [registrar, setRegistrar] = useState(false);
  const [turmaData, setTurmaData] = useState([]);

  useEffect(() => {
    const URL = "https://backendpi-7ekz.onrender.com/api";
    const token = localStorage.getItem("token");

    axios
      .get(`${URL}/turma/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        setTurmaData(data);
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
    <div id="containerTurmas">
      <MenuCoord />
      <main>
        <Header ldir="Início" adir="Turmas" />
        <div id="corpopai">
          <div id="cabecalho">
            <h1 id="textocab">Turmas</h1>
          </div>

          <SubCabecalho click={openRegistrar} />
          {registrar ? (
            <Registro nameRegistro="Turma" quant="2" click={closeRegistrar} />
          ) : (
            <></>
          )}
          <ListaGlobal objeto={turmaData} />
        </div>
      </main>
    </div>
  );
};

export default TurmasCoord;
