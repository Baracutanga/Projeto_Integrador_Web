import './styles.scss';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuProfe from '../../../components/MenuProfe/MenuProfe'
import Header from '../../../components/Header/Header'
import HeaderComunicados from '../../../components/HeaderComunicados/HeaderComunicados'
import Comunicado from '../../../components/Comunicado/Comunicado'

const ComunicadosProfe = () => {
  const [avisos, setAvisos] = useState([]); // Armazena os dados recebidos
  const URL = 'https://backendpi-7ekz.onrender.com/';

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get(`${URL}api/aviso/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAvisos(response.data.avisos); // Armazena os dados no estado
        console.log(response.data.avisos)
      })
      .catch((err) => console.error(err));
  }, []); // Array vazio para executar apenas uma vez

  const listItems = avisos.map((obj) => (
    <li key={obj._id}>
      <Comunicado titulo={obj.nome} conteudo={obj.descricao} />
    </li>
  ));

  return (
    <div id='containerComunicadosProfe'>
        <MenuProfe />
        <main>
        <Header ldir="Início" adir="Comunicados" />
        <div id="areaComunicados">
          <HeaderComunicados />
          <div id="comunicadoList">
            <ul>{listItems}</ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ComunicadosProfe