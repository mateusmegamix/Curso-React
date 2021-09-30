import React, {useState} from 'react'
import TabelaIMC from './TabelaIMC'
import Peso from './Peso'
import Altura from './Altura'
import CalcularIMC from './CalcularIMC'
import ResultadoIMC from './ResultadoIMC'

export default function ExercicioTwo() {

    const [peso, setPeso]=useState(0)
    const [altura, setAltura]=useState(0)
    const [resultado, setResultado]=useState(0)
    
    return (
        <>
            <Peso p={peso} sp={setPeso} />
            <Altura a={altura} sa={setAltura} />
            <CalcularIMC p={peso} a={altura} sr={setResultado} />
            <ResultadoIMC r={resultado} />
            <TabelaIMC />
        </>
    )
}