import React, { useEffect, useState } from 'react';
import MenuCoord from '../../../components/MenuCoord/MenuCoord';
import Header from '../../../components/Header/Header';
import './styles.scss';
import HeaderComunicados from '../../../components/HeaderComunicados/HeaderComunicados';
import Comunicado from '../../../components/Comunicado/Comunicado';
import axios from 'axios';
import FormComunicado from '../../../components/FormComunicado/FormComunicado';

const ComunicadosCoord = () => {
  const [avisos, setAvisos] = useState([]);
  const [pressioned, isPressioned] = useState(false)
  const [tituloComunicado, setTituloComunicado] = useState('');
  const [contComunicado, setContComunicado] = useState('');
  const [enviar, setEnviar] = useState(false);

  const openForm = () => {
    isPressioned(true)
  }

  const closeForm = () => {
    isPressioned(false)
  }

  const getInputTitulo = (e)  => {
    setTituloComunicado(e.target.value)
  }

  const getInputCont = (e)  => {
    setContComunicado(e.target.value)
  }
  

  const URL = 'https://backendpi-7ekz.onrender.com/api';
  const token = localStorage.getItem('token');

    function enviarComunicado() {
      axios.post(`${URL}/aviso/create/coordenador`, {
        nome: tituloComunicado,
        descricao: contComunicado,
      },{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then(res => {
        if(res.status === 200) {
          isPressioned(false)
          alert('Aviso criado com sucesso!!')
        } 
      })
      .catch(err => console.error(err))
    }

  useEffect(() => {

    axios
      .get(`${URL}/aviso/`, {
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
    <div id="containerComunicados">
      <MenuCoord />
      <main>
        <Header ldir="Início" adir="Comunicados" />
        <div id="areaComunicados">
          <HeaderComunicados click={openForm}  />
          {pressioned ? <FormComunicado inputConteudo={getInputCont} inputTitulo={getInputTitulo} click={closeForm} enviado={enviarComunicado} /> : <></>}
          <div id="comunicadoList">
            <ul>{listItems}</ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComunicadosCoord;
