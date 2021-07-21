import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {

  state = {
    posts: [
    {
      nomeUsuario: "paulinha",
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'Lucas',
      fotoUsuario: 'https://yt3.ggpht.com/yti/APfAmoF7QRFerIFha21lxI19Kof4xDDr-FJhsXz5FHhxCQ=s88-c-k-c0x00ffffff-no-rj-mo',
      fotoPost: 'https://i.pinimg.com/originals/be/96/42/be9642942227a2415c9e3478bb5711e5.jpg'
    },
    {
      nomeUsuario: 'Xablau57',
      fotoUsuario: 'https://www.mobafire.com/images/champion/square/shaco.png',
      fotoPost: 'https://i.pinimg.com/originals/63/70/02/63700253e3ca18e491c88ee995842448.jpg'
    }
    ],

    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: ""
  };

  addDados = () => {
    const novoPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    }
    const adicionaPost = [...this.state.posts, novoPost]
    this.setState({ posts: adicionaPost})
  }

  atualizarNome = (event) => {
    this.setState({nomeUsuario: event.target.value})
  }

  atualizarFotoUsuario = (event) => {
    this.setState({fotoUsuario: event.target.value})
  }

  atualizarFotoPost = (event) => {
    this.setState({fotoPost: event.target.value})
  }

  render() {
    const listaDePosts = this.state.posts.map((post, index) => {
      return (
        <post
        key={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}/>
      ) 
    })

    return (
      <MainContainer>
        <Post>
          {listaDePosts}
          </Post>
          
          <form>
          <input
          value={this.state.nomeUsuario}
          onChange={this.atualizarNome}
          placeholder={'Nome'}
          />
          <input 
          value={this.state.fotoUsuario}
          onChange={this.atualizarFotoUsuario}
          placeholder={'Foto Usuario'}
          />
          <input
           value={this.state.fotoPost}
           onChange={this.atualizarFotoPost}
           placeholder={'Foto Post'}
           />

           <button onClick={ this.addDados}>Send</button>

        </form>


      </MainContainer>      
      
      
      
    );
  }
}

export default App;
