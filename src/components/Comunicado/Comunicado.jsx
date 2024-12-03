import React from 'react'
import  "./styles.scss"

const Comunicado = ({ titulo, conteudo }) => {
  return (
    <div id='containerComunicadoComp'>
        <h1>{titulo}</h1>
        <p>{conteudo}</p>
        <button>Entrar</button>
    </div>
  )
}

export default Comunicado