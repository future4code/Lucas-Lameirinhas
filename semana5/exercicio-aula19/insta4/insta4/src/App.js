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
  render() {
    return (
      <div>
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
      <MainContainer>
        <Post
          nomeUsuario={'Lucas'}
          fotoUsuario={'https://yt3.ggpht.com/yti/APfAmoF7QRFerIFha21lxI19Kof4xDDr-FJhsXz5FHhxCQ=s88-c-k-c0x00ffffff-no-rj-mo'}
          fotoPost={'https://i.pinimg.com/originals/be/96/42/be9642942227a2415c9e3478bb5711e5.jpg'}
        />
      </MainContainer>
      <MainContainer>
        <Post
          nomeUsuario={'Xablau57'}
          fotoUsuario={'https://www.mobafire.com/images/champion/square/shaco.png'}
          fotoPost={'https://i.pinimg.com/originals/63/70/02/63700253e3ca18e491c88ee995842448.jpg'}
        />
      </MainContainer>
      </div>
      
      
    );
  }
}

export default App;
