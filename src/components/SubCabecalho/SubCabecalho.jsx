import SearchBar from "../SearchBar/SearchBar";
import React from "react";
import "./styles.scss";

const SubCabecalho = () => {
  const seforverdd = true;
  return (
    <div id="SubCabecalho">
      <SearchBar isRegister={seforverdd} />
      <select name="" id="">
        <option value="">Turma</option>
        <option value="1-A">1-A</option>
        <option value="2-A">2-A</option>
        <option value="1-B">1-B</option>
      </select>
      <button>Registrar</button>
    </div>
  );
};

export default SubCabecalho;
