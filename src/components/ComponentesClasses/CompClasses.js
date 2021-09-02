import React, { useState } from 'react'
import Carro from './Carro'

export default function CompClasses() {

    const [carro, setCarro] = useState(true)

    const remover = () => {
        setCarro(!carro)
    }

    return (
        <>
            <h1>Componentes de Classe</h1>
            {carro ? <Carro fator={10}/> : ''}
            
            <button onClick={()=>remover()}>
                {carro ? 'Ocultar' : 'Mostrar'}
            </button>
        </>
    )
}