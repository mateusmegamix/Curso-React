import React, {useState} from 'react'

export default function Renderizacao() {

    const [log, setLog] = useState(false)

    const msgLogin=()=>{
        return 'Usuário Logado'
    }

    const msgLogoff=()=>{
        return 'Favor Logar'
    }
    
    const cumprimento=()=>{
        const hora = new Date().getHours()
        if(hora >= 0 && hora < 13){
            return <p>Bom dia</p>
        } else if(hora >= 13 && hora < 18){
            return <p>Boa Tarde</p>
        } else {
            return <p>Boa Noite</p>
        }
    }

    return (
        <>
            {cumprimento()}
            <p>{log?msgLogin():msgLogoff()}</p>
            <button onClick={()=>setLog(!log)}>{log?'Logoff':'Login'}</button>
        </>
    )
}