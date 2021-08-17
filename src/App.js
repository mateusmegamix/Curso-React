import React, { useState } from 'react'
import Header from './components/Header'
import Corpo from './components/Corpo'
import Dados from './components/Dados'
import './App.css'
import Relogio from './components/Relogio'
import Numero from './components/Numero'

export default function App() {

  const [num, setNum] = useState(0)

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
    </section>
  )
}