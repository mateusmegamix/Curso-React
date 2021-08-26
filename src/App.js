import React, { useState } from 'react'
import Header from './components/Header'
import Corpo from './components/Corpo'
import Dados from './components/Dados'
import './App.css'
import Relogio from './components/Relogio'
import Numero from './components/Numero'
import Eventos from './components/Eventos'
import Renderizacao from './components/RenderizacaoCondicional'
import Renderizacao2 from './components/RenderizacaoCondicional2'
import ListaMap from './components/ListaMap'
import Component from './components/Elementos'
import Obj from './components/ObjetoState'
import ElevacaoState from './components/ElevacaoState'

export default function App() {

  const [num, setNum] = useState(0)
  const [ligado, setLigado] = useState(false)

  const cancelar=(obj)=>{
    return obj.preventDefault()
    //return false // não funciona
  }

  let n1 = 35

  // const meunome = "Mateus"
  // const curso = "Curso de React"

  // const textoDestaque = {
  //   color: '#00f',
  //   fontSize: '3em'
  // }

  return (
    <section className='caixa'>
      <Relogio />
      {/* <h1 style={{color: '#f00', fontSize: '3em'}}>Curso</h1>
      <h2 style={textoDestaque}>React</h2>
      <p className='texto'>Se inscreva em nosso canal e nos siga no instagram</p>
      <a href='github/mateuspereira' target='blank'>Github</a> */}
      <p>Valor do state num em App: {num}</p>
      <Numero num={num} setNum={setNum}/>

      <Eventos ligado={ligado} setLigado={setLigado}/>
      <a 
        href='https://github.com/mateusmegamix?tab=repositories' 
        target='_blank'
        onClick={(e)=>cancelar(e)}>
          Mateus Megamix
      </a>

      <Renderizacao/>
      <br/>
      <Renderizacao2/>
      <br/>
      <br/>
      <Obj/>
      <br/>
      <ElevacaoState />
    </section>
  )
}