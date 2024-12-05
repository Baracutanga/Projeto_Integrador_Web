import React from "react";
import "./styles.scss";
import CloseIcon from "../../img/icons/cross.svg";

const Registro = ({ nameRegistro, quant, click }) => {
  if (quant == 1) {
    return (
      <div id="containerRegister">
        <button id="closeBtn" onClick={click}>
          <img src={CloseIcon} alt="" />
        </button>
        <h1>{nameRegistro}</h1>
        <label>
          <span>Nome</span>
          <input type="text" id="" />
        </label>
        <button type="submit">Register</button>
      </div>
    );
  } else if (quant == 2) {
    return (
      <div id="containerRegister">
        <button id="closeBtn" onClick={click}>
          <img src={CloseIcon} alt="" />
        </button>
        <h1>{nameRegistro}</h1>
        <label>
          <span>Nome</span>
          <input type="text" id="" />
        </label>
        <label>
          <span>Turno</span>
          <input type="text" id="" />
        </label>
        <button type="submit">Register</button>
      </div>
    );
  } else if (quant == 3) {
    return (
      <div id="containerRegister">
        <button id="closeBtn" onClick={click}>
          <img src={CloseIcon} alt="" />
        </button>
        <h1>{nameRegistro}</h1>
        <label>
          <span>Nome</span>
          <input type="text" id="" />
        </label>
        <label>
          <span>Email</span>
          <input type="text" id="" />
        </label>
        <label>
          <span>Senha</span>
          <input type="text" id="" />
        </label>
        <button type="submit">Register</button>
      </div>
    );
  } else if (quant == 4) {
    return (
      <div id="containerRegister">
        <button id="closeBtn" onClick={click}>
          <img src={CloseIcon} alt="" />
        </button>
        <h1>{nameRegistro}</h1>
        <label>
          <span>Nome</span>
          <input type="text" id="" />
        </label>
        <label>
          <span>Email</span>
          <input type="text" id="" />
        </label>
        <label>
          <span>Senha</span>
          <input type="text" id="" />
        </label>
        <label>
          <span>Turma</span>
          <select name="selectTurma" id="selectTurma">
            <option value="">Turma</option>
            <option value="1-A">1-A</option>
            <option value="2-B">2-B</option>
            <option value="3-C">3-C</option>
            <option value="1-B">1-B</option>
          </select>
        </label>
        <button type="submit">Register</button>
      </div>
    );
  }
};
export default Registro;
