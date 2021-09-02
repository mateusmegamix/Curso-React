import React from 'react'

export default class Classe extends React.Component{

    constructor(props){
        super(props)
        this.modelo='Golf'
    }

    render(){
        return (
            <div>
                <h1>Primeiro componente de classe</h1>
                <p>Canal: {this.props.canal}</p>
            </div>
        )
    }
}

