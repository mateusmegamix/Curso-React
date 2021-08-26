import React, {useState} from 'react'

export default function Component() {

    const [nome, setNome] = useState('')
    const [carro, setCarro] = useState('')
    const handleChangeNome=(e)=>{
        setNome(e.target.value)
    }

    return (
        <>
        <section style={{flexDirection: 'row'}}>
            <label>Digite seu nome: </label>
            <input 
                type='text' 
                name='fnome'
                value={nome}
                onChange={(e)=>setNome(e.target.value)}
            />
            <p>Nome digitado: {nome}</p>
            <br/>
            <label>Selecione um carro: </label>
            <select values={carro} onChange={(e)=>setCarro(e.target.value)}>
                <option value="HRV">HRV</option>
                <option value="Golf">Golf</option>
                <option value="Cruze">Cruze</option>
                <option value="Argo">Argo</option>
            </select>
            <p>O carro selecionado: {carro}</p>
        </section>
        </>
            
    )
}