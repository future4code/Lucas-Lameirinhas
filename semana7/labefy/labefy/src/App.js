import React from 'react';
import styled from 'styled-components'
import Home from './components/Home'
import Playlists from './components/Playlist'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export default class App extends React.Component {
state = {
  telaAtual: 'home'
}

mostraTela = () => {
  switch (this.state.telaAtual){
    case "home":
      return <Home irParaPlaylists={this.irParaPlaylists}/>
    case "playlist":
      return <Playlists irParaDetails={this.irParaDetails} irParaHome={this.irParaHome}/>
    default:
      return <div>Erro!</div>
  }
}

irParaHome = () => {
  this.setState({telaAtual:'home'})
}

irParaPlaylists = () => {
  this.setState({telaAtual:'playlist'})
}

  render() {
    return (
      <Container>
        {this.mostraTela()}
      </Container>
    )
  }
}
