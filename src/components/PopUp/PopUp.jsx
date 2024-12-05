import React from "react";
import "./styles.scss";
import SairIcon from "../../img/icons/saidaIcon.svg";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login";

const PopUp = () => {
  const navigation = useNavigate();

  return (
    <div id="popupContainer">
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigation("/");
        }}
      >
        <span>Sair</span>
        <img src={SairIcon} alt="" />
      </button>
    </div>
  );
};

export default PopUp;
