import React from 'react'
import Header from './components/Header'
import Corpo from './components/Corpo'
import Dados from './components/Dados'
import './App.css'

export default function App() {

  // const meunome = "Mateus"
  // const curso = "Curso de React"

  const textoDestaque = {
    color: '#00f',
    fontSize: '3em'
  }

  return (
    <section className='caixa'>
      <h1 style={{color: '#f00', fontSize: '3em'}}>Curso</h1>
      <h2 style={textoDestaque}>React</h2>
      <p className='texto'>Se inscreva em nosso canal e nos siga no instagram</p>
      <a href='github/mateuspereira' target='blank'>Github</a>
    </section>
  )
}