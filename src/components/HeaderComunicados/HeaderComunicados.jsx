import React from "react";
import "./styles.scss";

const isConceitos = true;

const HeaderComunicados = ({ click }) => {
  return (
    <div id="headerRegistros">
      <h1>Comunicados</h1>
      {isConceitos ? (
        <label>
          <select name="" id="">
            <option value="" selected>
              Disciplina
            </option>
            <option value="1-A">1-A</option>
            <option value="2-A">2-A</option>
            <option value="1-B">1-B</option>
          </select>
          <select name="" id="">
            <option value="" selected>
              Disciplina
            </option>
            <option value="1-A">1-A</option>
            <option value="2-A">2-A</option>
            <option value="1-B">1-B</option>
          </select>
          <button onClick={click}>Registrar</button>
        </label>
      ) : (
        <label>
          <select name="" id="">
            <option value="" selected>
              Disciplina
            </option>
            <option value="1-A">1-A</option>
            <option value="2-A">2-A</option>
            <option value="1-B">1-B</option>
          </select>
          <select name="" id="">
            <option value="" selected>
              Disciplina
            </option>
            <option value="1-A">1-A</option>
            <option value="2-A">2-A</option>
            <option value="1-B">1-B</option>
          </select>
        </label>
      )}
    </div>
  );
};

export default HeaderComunicados;
