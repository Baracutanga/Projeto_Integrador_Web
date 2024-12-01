import React from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"

const AlunosCoord = () => {
  return (
    <div id='containerAlunos'>
        <MenuCoord />
        <main>
            <Header ldir="Início" adir="Alunos" />
        </main>
    </div>
  )
}

export default AlunosCoord