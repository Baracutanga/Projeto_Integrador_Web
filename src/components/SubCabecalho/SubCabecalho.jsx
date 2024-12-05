import "./styles.scss";
import SearchBar from "../SearchBar/SearchBar";
import React from "react";

const SubCabecalho = () => {
  const seforverdd = true;
  return (
    <div id="SubCabecalho">
      <SearchBar isRegister={seforverdd} />
      <label>
      <select name="" id="">
        <option value="">Turma</option>
        <option value="1-A">1-A</option>
        <option value="2-A">2-A</option>
        <option value="1-B">1-B</option>
      </select>
      </label>
      <button>Registrar</button>
    </div>
    
  );
};

export default SubCabecalho;
