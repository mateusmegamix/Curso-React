import React from 'react'

import Logo from './components/img/farm.PNG'

export default function App() {

  const nome=()=>{
    return ('Mateus')
  }

  // const meunome = "Mateus"
  //const curso = "Curso de React"

  return (
    <section>
      <header>
        <p>{'Meu nome: ' + nome()}</p>
        <p>Axie</p>
      </header>
      <section>
        <img src={Logo}/>
      </section>-
    </section>
  )
}