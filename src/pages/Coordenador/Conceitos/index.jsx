import React, { useEffect, useState } from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"
import HeaderPesquisa from '../../../components/HeaderPesquisa/HeaderPesquisa'
import axios from 'axios'
import ListaTurmas from '../../../components/ListaTurmas/ListaTurmas'
import HeaderComunicados from '../../../components/HeaderComunicados/HeaderComunicados'
import ListaConceitos from '../../../components/ListaConceitos/ListaConceitos'

const ConceitosCoord = () => {
  const [turma, setTurma] = useState('')
  const [selected, setSelected] = useState(false);

  function handleSelect() {
    setSelected(true);
  }

  const URL = 'https://backendpi-7ekz.onrender.com/';

  useEffect(() => {
    // const token = localStorage.getItem("token");

    // axios.get(`${URL}api/coordenador/turmas`, {
    //   headers: {
    //     Authorization: `Bearer: ${token}`,
    //   }
    // })
    // .then(response => {
    //   const data = response.data;

    //   console.log(data);
    // })
  })
  
  if (!selected) {
    return (
      <div id='containerConceitos'>
          <MenuCoord />
          <main>
              <Header ldir="Início" adir="Conceitos" />
              <div id='containerConceitos'>
                <HeaderPesquisa />
                <div>
                  <ListaTurmas select={handleSelect} />
                </div>
              </div>
          </main>
      </div>
    )
  } else {
    return (
      <div id='containerConceitos'>
          <MenuCoord />
          <main>
              <Header ldir="Início" adir="Conceitos" />
              <div id='containerConceitos'>
                <HeaderComunicados name="Conceitos" />
                <div>
                  <ListaConceitos />
                </div>
              </div>
          </main>
      </div>
    )
  }
}

export default ConceitosCoord