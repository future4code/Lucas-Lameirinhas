
import axios from "axios"
import React from "react"

export default class TelaCadastro extends React.Component{
    state = {
        nome: "",
        email: ""
    }

    handleNome = (e) => {
        this.setState({nome: e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "lucas-lovelace"
            }
        })

        .then((res) => {
            alert("Usuario cadastrado com sucesso!")
            this.setState({nome:"", email: ""})
        })
        .catch((err) => {
            alert(err.response.data.messaage)
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                <h2>Cadastro</h2>
                <input 
                placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.handleNome}/>

                <input placeholder={"E-mail"}
                value={this.state.email}
                onChange={this.handleEmail}/>
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }

}