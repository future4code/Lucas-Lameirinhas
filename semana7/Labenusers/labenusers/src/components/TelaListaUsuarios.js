import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display:flex;
    justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component{
    state = {
        usuarios:[]
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () =>{
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "lucas-lovelace"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("ferrou")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "lucas-lovelace"
            }
        })
        .then((res) => {
            alert("Usuario deletado")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("ja era")
        })
    }

    render(){

        const listaUsuarios = this.state.usuarios.map((user) => {
            return ( <CardUsuario key={user.id}>{user.name}
            <button onClick={() => this.deletarUsuario(user.id)}>X</button></CardUsuario> )
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }

}