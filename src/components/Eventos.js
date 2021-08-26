import React from 'react'
import LedVerde from './imgs/ledverde.jpg'
import LedVermelho from './imgs/ledvermelho.jpg'

export default function Eventos(props) {

    return (
        <>
            <img 
                style={{width: '50px'}} 
                src={props.ligado?LedVerde:LedVermelho}/>
            <br/>
            <button 
                onClick={()=>props.setLigado(!props.ligado)}>
                    {props.ligado?'Desligar':'Ligar'}
            </button>
        </>
    )
}