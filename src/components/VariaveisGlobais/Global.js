import React, { useState } from 'react'
import VarGlobal from './VarGlobal'
import Info from './Info'

export default function Globais() {

    const [resumo, setResumo]=useState(VarGlobal.resumo)

    const gravarResumo=()=>{
        VarGlobal.resumo=resumo
    }
    const verResumo=()=>{
        alert(VarGlobal.resumo)
    }

    return (
        <>
        
            <Info />
            <hr/>
            <p>{'Canal: ' + VarGlobal.canal}</p>
            <p>{'Canal: ' + VarGlobal.curso}</p>
            <p>{'Canal: ' + VarGlobal.ano}</p>
            <hr/>
            <input type="text" size={50} value={resumo} onChange={(r)=>setResumo(r.target.value)}/>
            <br/>
            <button onClick={()=>gravarResumo()}>Gravar Resumo</button>
            <button onClick={()=>verResumo()}>Ver Resumo</button>
            
        </>
    )
}