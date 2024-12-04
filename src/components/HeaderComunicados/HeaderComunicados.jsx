import React, { useState } from "react";
import "./styles.scss";

const HeaderComunicados = ({ name }) => {
  return (
    <div id="headerRegistros">
      <h1>{name}</h1>
      {name == "Conceitos" ? (
        <label>
          <select name="" id="">
            <option value="" selected>
              Disciplina
            </option>
            <option value="Matématica">Matématica</option>
            <option value="História">História</option>
            <option value="Geografia">Geografia</option>
            <option value="Física">Física</option>
            <option value="Robotica">Robotica</option>
            <option value="Empreend.">Empreend.</option>
            <option value="Quimica">Quimica</option>
          </select>
          <select name="" id="">
            <option value="" selected>
              Turmas
            </option>
            <option value="1-A">1-A</option>
            <option value="2-A">2-A</option>
            <option value="1-B">1-B</option>
          </select>
        </label>
      ) : (
        <label>
          <select name="" id="">
            <option value="" selected>
              Disciplina
            </option>
            <option value="Matématica">Matématica</option>
            <option value="História">História</option>
            <option value="Geografia">Geografia</option>
            <option value="Física">Física</option>
            <option value="Robotica">Robotica</option>
            <option value="Empreend.">Empreend.</option>
            <option value="Quimica">Quimica</option>
          </select>
          <select name="" id="">
            <option value="" selected>
              Turma
            </option>
            <option value="1-A">1-A</option>
            <option value="2-A">2-A</option>
            <option value="1-B">1-B</option>
          </select>
          <button>Registrar</button>
        </label>
      )}
    </div>
  );
};

export default HeaderComunicados;
