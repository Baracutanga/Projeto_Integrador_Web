import React, { useEffect, useState } from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"
import HeaderPesquisa from '../../../components/HeaderPesquisa/HeaderPesquisa'
import axios from 'axios'
import ListaTurmas from '../../../components/ListaTurmas/ListaTurmas'

const ConceitosCoord = () => {
  const [turma, setTurma] = useState('')
  const [selected, setSelected] = useState(false);

  function handleSelect() {
    setSelected(true);
  }

  const URL = 'https://backendpi-7ekz.onrender.com/';

  useEffect(() => {
    const token = localStorage.getItem("token");  

    axios.get(`${URL}api/aviso/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(response => {
      const data = response.data;
      // setTurmaNomeData(data.turma.nome);
      // setTurmaTurnoData(data.turma.turno);

      console.log(data);
    })
    .catch(err => console.error(err)); 
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
                <HeaderPesquisa />
                <div>
                  
                </div>
              </div>
          </main>
      </div>
    )
  }
}

export default ConceitosCoord