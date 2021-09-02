import React from 'react'
import VarGlobal from './VarGlobal'

export default function Info() {
    return (
        <>
            <p>{'Canal: ' + VarGlobal.canal}</p>
            <p>{'Canal: ' + VarGlobal.curso}</p>
            <p>{'Canal: ' + VarGlobal.ano}</p>
        </>
    )
}