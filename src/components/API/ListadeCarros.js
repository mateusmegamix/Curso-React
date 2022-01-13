import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function ListadeCarros(){
    
    const [carros, setCarros]=useState([])

    useEffect(()=>{
        fetch('https://megamixapireactexemploPro.mateuspereira12.repl.co')
            .then((res)=>res.json())
            .then(
                (resultado)=>{
                    setCarros(resultado)
                }
            )
    })

        // axios.get('https://megamixapireactexemploPro.mateuspereira12.repl.co')
        //     .then(res=>{
        //         const dadosCarros=res.data
        //         setCarros(dadosCarros)
        //     })
        // }
        //)

   return(
        <div>
            {carros.map(
                carro=> <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
            )}
        </div>
    )
}