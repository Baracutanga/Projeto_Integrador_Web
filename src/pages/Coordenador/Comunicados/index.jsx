import React, { useEffect, useState } from 'react'
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../components/Header/Header'
import "./styles.scss"
import HeaderComunicados from '../../../components/HeaderComunicados/HeaderComunicados'
import Comunicado from '../../../components/Comunicado/Comunicado'
import { avisosEscolares } from '../../../../objetos/Avisos'

const ComunicadosCoord = () => {

  const listItems = avisosEscolares.map(obj => 
    <li>
        <Comunicado titulo={obj.titulo} conteudo={obj.conteudo} key={obj.id} />
    </li>
  )

  return (
    <div id='containerComunicados'>
        <MenuCoord />
        <main>
            <Header ldir="Início" adir="Comunicados" />
            <div id='areaComunicados'>
              <HeaderComunicados name="Comunicados" />
              <div id='comunicadoList'>
                <ul>{listItems}</ul>
              </div>
            </div>
        </main>
    </div>
  )
}

export default ComunicadosCoord