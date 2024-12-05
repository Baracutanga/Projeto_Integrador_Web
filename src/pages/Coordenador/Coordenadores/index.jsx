import React, { useState }  from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"
import SubCabecalho from '../../../components/SubCabecalho/SubCabecalho'
import Registro from '../../../components/Registro/Registro'
import SearchBar from '../../../components/SearchBar/SearchBar'

const CoordenadoresCoord = () => {
  const [registrar, setRegistrar] = useState(false)

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
          {/* não resolvido a lista  */}
          <div id="lista"></div>
        </div>
      </main>
    </div>
  )
}

export default CoordenadoresCoord