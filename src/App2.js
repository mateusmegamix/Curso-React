import React from 'react'
import Global from './components/VariaveisGlobais/Global'
import Paginas from './components/Navigation'
import ExercioOne from './components/Exercicios/ExercicioOne'
import ExercicioTwo from './components/Exercicios/ExercicioTwo'

export default function App() {
    return (
        <>
            <Global />
            <br/>
            <hr/>
            <br/>
            <Paginas />
            <br/>
            <hr/>
            <br/>
            <ExercioOne />
            <br/>
            <hr/>
            <br/>
            <ExercicioTwo />

        </>
    )
}