import React, { useEffect, useState } from 'react'
import './styles.scss';
import MenuProfe from '../../../components/MenuProfe/MenuProfe';
import Header from '../../../components/Header/Header';
import PopUp from '../../../components/PopUp/PopUp';

const ConceitosProfe = () => {
  return (
    <div id='containerConceitosProfe'>
      <MenuProfe />
      <main>
        <Header ldir="Início" adir="Conceitos" />
        <div id="containerListaConceitos">
          <h1>Conceitos</h1>
          <div id="headerListagem">
            <span id='nomeAluno'>Nome do aluno</span>
            <span>AV1</span>
            <span>AV2</span>
            <span>MU</span>
            <span>MUPN</span>
            <span>F</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ConceitosProfe