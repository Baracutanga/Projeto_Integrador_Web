import React, { useState, useEffect } from "react";
import MenuCoord from "../../../components/MenuCoord/MenuCoord";
import Header from "../../../components/Header/Header";
import SubCabecalho from "../../../components/SubCabecalho/SubCabecalho";
import Registro from "../../../components/Registro/Registro";
import "./styles.scss";
import axios from "axios";
import ListaGlobal from "../../../components/ListaGlobal/ListaGlobal";

const DisciplinasCoord = () => {
  const [registrar, setRegistrar] = useState(false);
  const [disciplinaData, setDisciplinaData] = useState([]);

  useEffect(() => {
    const URL = "https://backendpi-7ekz.onrender.com/api";
    const token = localStorage.getItem("token");

    axios
      .get(`${URL}/disciplina`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        setDisciplinaData(data);
      })
      .catch((err) => console.error(err));
  });

  const openRegistrar = () => {
    setRegistrar(true);
  };
  const closeRegistrar = () => {
    setRegistrar(false);
  };
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
          {registrar ? (
            <Registro
              nameRegistro="Disciplina"
              quant="1"
              click={closeRegistrar}
            />
          ) : (
            <></>
          )}
          <ListaGlobal objeto={disciplinaData} />
        </div>
      </main>
    </div>
  );
};

export default DisciplinasCoord;
