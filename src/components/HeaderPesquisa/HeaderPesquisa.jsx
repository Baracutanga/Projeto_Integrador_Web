import React from 'react'
import "./styles.scss"
import SearchBar from '../SearchBar/SearchBar'

const HeaderPesquisa = () => {
  const seforfalso = false
  return (
    <div id='containerHeaderPesquisa'>
        <h1>Selecionar Turma</h1>
        <SearchBar isRegister={seforfalso}/>
    </div>
  )
}

export default HeaderPesquisa