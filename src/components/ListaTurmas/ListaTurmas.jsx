import React, { useEffect } from "react";
import "./styles.scss";

const Turmas = [
  { id: 1, nome: "1-A", turno: "Manhã" },
  { id: 2, nome: "1-B", turno: "Tarde" },
  { id: 3, nome: "1-C", turno: "Noite" },
  { id: 4, nome: "2-A", turno: "Manhã" },
  { id: 5, nome: "2-B", turno: "Tarde" },
  { id: 6, nome: "2-C", turno: "Noite" },
  { id: 7, nome: "3-A", turno: "Manhã" },
  { id: 8, nome: "3-B", turno: "Tarde" },
  { id: 9, nome: "3-C", turno: "Noite" },
  { id: 10, nome: "4-A", turno: "Manhã" },
  { id: 11, nome: "4-B", turno: "Tarde" },
  { id: 12, nome: "4-C", turno: "Noite" },
];

const ListaTurmas = ({ select }) => {
  const itemLista = Turmas.map((turma) => (
    <li className="turma">
      <span>{turma.nome}</span>
      <span>{turma.turno}</span>
      <button onClick={select}>Selecionar</button>
    </li>
  ));

  return (
    <div id="containerTurmasLista">
      <div id="headerTurmas">
        <span>Nome da turma</span>
        <span>Turno</span>
      </div>
      <div id="listaTurmas">
        <ul>{itemLista}</ul>
      </div>
    </div>
  );
};

export default ListaTurmas;
