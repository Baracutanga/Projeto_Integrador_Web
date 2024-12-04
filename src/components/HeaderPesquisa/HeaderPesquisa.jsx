import React from 'react'
import "./styles.scss"
import SearchBar from '../SearchBar/SearchBar'

const HeaderPesquisa = () => {
  return (
    <div id='containerHeaderPesquisa'>
        <h1>Selecionar Turma</h1>
        <SearchBar />
    </div>
  )
}

export default HeaderPesquisa