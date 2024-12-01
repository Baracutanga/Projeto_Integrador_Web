import React from 'react'
import "./styles.scss"
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'

const HomeCoord = () => {
  return (
    <div id='containerHome'>
        <MenuCoord />
        <main>
          <Header />
        </main>
    </div>
  )
}

export default HomeCoord