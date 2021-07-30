import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export default class Home extends React.Component {
    state={
        name:""
    }

    onChangePlaylist = (event) =>{
        this.setState({name: event.target.value})
    }

    criarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.name
        }
        axios.post(url, body, {
            headers: {
                Authorization: "lucas-lameirinhas-lovelace"
            }
        })
        .then((res)=>{
            alert ('Playlist adicionada')
            this.setState({name:""})
        })
        .catch((err)=>{
        })
    }

    render() {
        return (
            <Container>
                <h1>Labefy</h1>
                <h2>Crie sua Playlist</h2><input onChange={this.onChangePlaylist} value={this.state.name} placeholder="Insira o nome da playlist"></input>
                <button onClick={this.criarPlaylists}>Enviar Playlist</button>
                <button onClick={this.props.irParaPlaylists}>Ver Todas as Playlists</button>
            </Container>
        )
    }
}