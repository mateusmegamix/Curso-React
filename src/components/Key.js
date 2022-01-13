import React from 'react'

function ListaNumeros(props){
    const num=props.numeros
    const lista_numeros=num.map(
        (n)=><li key={n.toString()}>{n}</li>
    )
    return (<ul>{lista_numeros}</ul>)
}

const array_numeros=[1,2,3,4,5,6,7,8,9]

export default function Key() {
    return (
        <>
            <ListaNumeros numeros={array_numeros} />
        </>
    )
}