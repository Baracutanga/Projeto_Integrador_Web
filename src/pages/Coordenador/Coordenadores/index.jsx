import React, { useEffect, useState }  from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"
import SubCabecalho from '../../../components/SubCabecalho/SubCabecalho'
import Registro from '../../../components/Registro/Registro'
import axios from 'axios'
import ListaGlobal from '../../../components/ListaGlobal/ListaGlobal'

const CoordenadoresCoord = () => {
  const [registrar, setRegistrar] = useState(false)
  const [coordData, setCoordData] = useState([])

  useEffect(() => {
    const URL = 'https://backendpi-7ekz.onrender.com/api'
    const token = localStorage.getItem("token")

    axios.get(`${URL}/coordenador`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      const data = res.data
      setCoordData(data);
    })
    .catch(err => console.error(err))
  })

  const openRegistrar = () => {
    setRegistrar(true)
  }
  const closeRegistrar = () => {
    setRegistrar(false)
  }

  const forverdadeiro = true;
  return (
    <div id="containerCoordenadores">
      <MenuCoord />
      <main>
        <Header ldir="Início" adir="Coordenadores" />
        <div id="corpopai">
          <div id="cabecalho">
            <h1 id="textocab">Coordenadores</h1>
          </div>

          <SubCabecalho click={openRegistrar} />
          {registrar ? <Registro nameRegistro="Coordenador" quant="3" click={closeRegistrar} /> : <></>}
          <div id="lista">
            <ListaGlobal objeto={coordData} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default CoordenadoresCoord