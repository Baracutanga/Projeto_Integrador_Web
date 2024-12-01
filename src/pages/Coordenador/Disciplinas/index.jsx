import React from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"

const DisciplinasCoord = () => {
  return (
    <div id='containerDisciplinas'>
        <MenuCoord />
        <main>
            <Header ldir="Início" adir="Disicplinas" />
        </main>
    </div>
  )
}

export default DisciplinasCoord