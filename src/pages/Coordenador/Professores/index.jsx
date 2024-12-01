import React from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"

const ProfessoresCoord = () => {
  return (
    <div id='containerProfessores'>
        <MenuCoord />
        <main>
            <Header ldir="Início" adir="Professores" />
        </main>
    </div>
  )
}

export default ProfessoresCoord