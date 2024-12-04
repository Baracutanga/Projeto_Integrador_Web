import React from "react";
import PesquisaIcon from '../../img/icons/buttons.svg'
import "./styles.scss";

const SearchBar = () => {
  return (
    <div id="searchContainer">
      <img src={PesquisaIcon} alt="" />
      <input type="text" placeholder="Pesquisar" />
    </div>
  );
};

export default SearchBar;
