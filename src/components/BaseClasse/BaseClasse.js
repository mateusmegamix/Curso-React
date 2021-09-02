import React from 'react'

export default class BaseClasse extends React.Component{
    constructor(props){
        //Para permitir o uso de props
        super(props)

        //uso de state
        this.state={
            canal: 'Megamix',
            curso: 'React',
            ativo: true,
            nome: this.props.nomeAluno
        }
        this.status=this.props.nomeAluno

        //bindagem
        let ad=this.ativarDesativar.bind(this)
        //Instruções do construtor
    }

    //Função para manipular o state
    ativarDesativar(){
        this.setState(
            (state)=>{
                ativo=!state.ativo
            }
        )
    }

    componentDidMount(){
        console.log('O component foi criado')
    }

    componentDidUpdate(){
        console.log('O component foi atualizado')
    }

    componentWillUnmount(){
        console.log('O component foi removido')
    }

    render(){
        return (
            <>
                <h1>Component de Classe</h1>
                {/* Chamada da função bind */}
                <button onClick={this.ad}>Ativar Desativar</button>
                <button onClick={()=>this.ativarDesativar}>Ativar Desativar</button>
            </>
        )
    }
}