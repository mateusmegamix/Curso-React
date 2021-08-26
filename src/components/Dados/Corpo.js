import React from 'react'
import Dados from './Dados'

export default function Corpo() {

    const tam=()=>{
        return '2 metros'
    }

    const soma = (v1, v2) => {
        return v1 + v2
    }

    const nome = 'Mateus'
    
    return (
        <section>
            <h2>Curso de React</h2>
            <p>Aprendendo React</p>
            <Dados 
             nome={nome} 
             idade='24' 
             peso='60,0' 
             tamanho={tam} 
             somar={soma}
            />
        </section>
    )
}