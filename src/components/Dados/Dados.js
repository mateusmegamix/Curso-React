import React from 'react'

export default function Dados(props){

    const n1=10
    const n2=5

    return (
        <section>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Peso: {props.peso}</p>
            <p>Tamanho: {props.tamanho()}</p>
            <p>{`A soma de ${n1} + ${n2} = ${props.somar(n1, n2)}`}</p>
        </section>
    )
}