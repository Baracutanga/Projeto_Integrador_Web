import React from 'react'
import PesquisaIcon from '../../img/icons/buttons.svg'
import "./styles.scss"

const HeaderPesquisa = () => {
  return (
    <div id='containerHeaderPesquisa'>
        <h1>Selecionar Turma</h1>
        <div id='searchContainer'>
            <img src={PesquisaIcon} alt="" />
            <input type="text" placeholder='Pesquisar' />
        </div>
    </div>
  )
}

export default HeaderPesquisa