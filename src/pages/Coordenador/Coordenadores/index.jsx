import React from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"
import SearchBar from '../../../components/SearchBar/SearchBar'

const CoordenadoresCoord = () => {
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

          <SearchBar />
          {/* não resolvido a lista  */}
          <div id="lista"></div>
        </div>
      </main>
    </div>
  )
}

export default CoordenadoresCoord