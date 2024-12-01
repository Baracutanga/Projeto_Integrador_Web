import React from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"

const TurmasCoord = () => {
  return (
    <div id='containerTurmas'>
        <MenuCoord />
        <main>
            <Header ldir="Início" adir="Turmas" />
        </main>
    </div>
  )
}

export default TurmasCoord