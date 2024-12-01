import React from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"

const ComunicadosCoord = () => {
  return (
    <div id='containerComunicados'>
        <MenuCoord />
        <main>
            <Header ldir="Início" adir="Comunicados" />
        </main>
    </div>
  )
}

export default ComunicadosCoord