import React from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"

const ConceitosCoord = () => {
  return (
    <div id='containerConceitos'>
        <MenuCoord />
        <main>
            <Header ldir="Início" adir="Conceitos" />
        </main>
    </div>
  )
}

export default ConceitosCoord