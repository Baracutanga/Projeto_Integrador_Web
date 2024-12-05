import trespontos from "../../img/icons/dots.svg";
import { useState, useEffect } from "react";
import "./styles.scss";
import React from "react";

const ListaGlobal = ({ objeto }) => {
  const [alunoData, setAlunoData] = useState([]);

  // Use useEffect para atualizar o estado apenas uma vez
  useEffect(() => {
    if (Array.isArray(objeto)) {
      setAlunoData(objeto);
    }
  }, [objeto]);

  const lista = alunoData.map((obj, index) => (
    <li key={index}>
      <span>{obj.nome}</span>
      <span>{obj.email}</span>
      <button>
        <img src={trespontos} alt="Mais opções" />
      </button>
    </li>
  ));

  return (
    <div>
      <ul id="listagemContainer">{lista}</ul>
    </div>
  );
};

export default ListaGlobal;