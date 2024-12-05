import React from "react";
import "./styles.scss";
import CloseIcon from "../../img/icons/cross.svg";

const FormComunicado = ({ click, inputConteudo, inputTitulo, enviado }) => {
  return (
    <div id="containerFormComunicado">
      <button id="closeIcon" onClick={click}>
        <img src={CloseIcon} alt="" />
      </button>
      <h1>Aviso</h1>
      <label>
        <span id="titulo">Título</span>
        <input
          type="text"
          id="inputTitulo"
          placeholder="Título"
          onChange={inputTitulo}
        />
      </label>
      <label id="inputText">
        <span id="conteudo">Conteúdo</span>
        <textarea
          id="inputContent"
          placeholder="O que os seu alunos precisam saber?"
          onChange={inputConteudo}
        />
      </label>
      <button type="submit" onClick={enviado}>Enviar</button>
    </div>
  );
};

export default FormComunicado;
