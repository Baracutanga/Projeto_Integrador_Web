import React from "react";
import PesquisaIcon from '../../img/icons/buttons.svg'
import "./styles.scss";

const SearchBar = ({ isRegister }) => {
  return (
    <div className={isRegister ? "left" : "right"} id="searchContainer">
      <img src={PesquisaIcon} alt="" />
      <input type="text" placeholder="Pesquisar" />
    </div>
  );
};

export default SearchBar;
