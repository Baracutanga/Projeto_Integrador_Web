import React from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"

const CoordenadoresCoord = () => {
  return (
    <div id='containerCoordenadores'>
        <MenuCoord />
        <main>
            <Header ldir="Início" adir="Coordenadores" />
        </main>
    </div>
  )
}

export default CoordenadoresCoord