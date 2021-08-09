import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const CardDePlaylists = styled.div`
    width:400px;
    display: flex;
    justify-content:space-between;
    padding:8px;
    border: 1px solid black;
`
const InfoMusicas = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 10px;
    flex-direction: column;
`
const CardDeMusicas = styled.div`
    display:flex;
    flex-direction:column;
    padding:8px;
`
const Botao = styled.button`
    display: flex;
    justify-content: space-between;
`

export default class Playlists extends React.Component {
    state = {
        playlists: [],
        tracks: [
            {
                name: "",
                artist: "",
                url: ""
            }
        ]
    }

    componentDidMount() {
        this.getPlaylists()
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    }
    onChangeArtist = (event) => {
        this.setState({ artist: event.target.value })
    }
    onChangeUrl = (event) => {
        this.setState({ url: event.target.value })
    }

    getPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "lucas-lameirinhas-lovelace"
            }
        })
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
            })
            .catch((err) => {
            })
    }

    delPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "lucas-lameirinhas-lovelace"
            }
        })
            .then((res) => {
                alert('Playlist removida!')
                this.getPlaylists()
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    addTrack = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        axios.post(url, body, {
            headers: {
                Authorization: "lucas-lameirinhas-lovelace"
            }
        })
            .then((res) => {
                alert('Música adicionada')
                this.setState({ name: '', artist: '', url: '' })
            })
            .catch((err) => {
            })
    }

    getPlaylistTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.get(url, {
            headers: {
                Authorization: "lucas-lameirinhas-lovelace"
            }
        })
            .then((res) => {
                this.setState({ tracks: res.data.result.tracks })
            }).catch((err) => {
            })
    }

    render() {
        const playlists = this.state.playlists.map((playlist) => {
            return (
                <CardDePlaylists 
                    key={playlist.id}>
                    {playlist.name}
                    <Botao>
                        <button onClick={() => this.getPlaylistTracks(playlist.id)}>Ver Playlist</button>
                        <button onClick={() => this.addTrack(playlist.id)}>Adicionar Música</button>
                        <button onClick={() => this.delPlaylist(playlist.id)}>Remover</button>
                    </Botao>
                </CardDePlaylists>
            )
        })
        const musicas = this.state.tracks.map((track) => {
            return (
                <CardDeMusicas key={track.id}>
                    <InfoMusicas>
                    <p>Nome:<b>{track.name}</b></p>
                    <p>Artist: <b>{track.artist}</b></p>
                    <p>Url: <b>{track.url}</b></p>
                    </InfoMusicas>
                </CardDeMusicas>
            )
        })
        return (
            <Container>
                <h1>Labefy: Playlists</h1>
                <h3>Adicione sua Música:</h3>
                <input placeholder="Nome da Musica" value={this.state.tracks.name} onChange={this.onChangeName}></input>
                <input placeholder="Artista" value={this.state.tracks.artist} onChange={this.onChangeArtist}></input>
                <input placeholder="Link" value={this.state.tracks.url} onChange={this.onChangeUrl}></input>

                <h3>Playlists:</h3>
                {playlists}
                <h3>Músicas da Playlist:</h3>
                {musicas}

                <Botao onClick={this.props.irParaHome}>Voltar</Botao>
            </Container>

        )
    }
}