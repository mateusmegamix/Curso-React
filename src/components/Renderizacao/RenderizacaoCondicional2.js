import React, { useState } from 'react'

export default function Renderizacao2() {

    const [cor, setCor] = useState(0)

    const padrao = {color: '#000'}
    const vermelho = {color: '#f00'}
    const verde = {color: '#0f0'}
    const azul = {color: '#00f'}

    const retornaCor=(c)=>{
        if(c===0){
            return padrao
        } else if(cor===1){
            return vermelho
        } else if(cor===2){
            return verde
        } else {
            return azul
        }
    }

    const mudarCor=()=>{
        setCor(cor+1)
        if(cor > 2){
            setCor(0)  
        }
    }

    //setInterval(mudarCor, 1000)

    return(
        <>
            <h1 style={retornaCor(cor)}>Megamix</h1>
            <button onClick={()=>mudarCor()}>Mudar a cor</button>
        </>
    )
}