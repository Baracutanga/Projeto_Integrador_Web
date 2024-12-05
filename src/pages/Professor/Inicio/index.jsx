import React from 'react'
import "./styles.scss"
import Header from '../../../components/Header/Header'
import MenuProfe from '../../../components/MenuProfe/MenuProfe'

const HomeProfe = () => {
  return (
    <div id='containerHome'>
        <MenuProfe />
        <main>
          <Header />
        </main>
    </div>
  )
}

export default HomeProfe