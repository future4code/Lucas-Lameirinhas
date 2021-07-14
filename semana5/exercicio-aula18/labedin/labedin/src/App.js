import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/85261928?s=400u=b86753762ed627b2ea6f2791fd22c2ced268048dv=4" 
          nome="Lucas Lameirinhas" 
          descricao="Oi, eu sou o Lucas Lameirinhas. Tenho 27 anos e sou formado em RTV na Universidade Anhembi Morumbi. Atualmente sou estudante de Tecnologia da Informação na Escola de Desenvolvedores Labenu. Adoro jogar futebol, ver filmes/animes e fazer amizades!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
      <div>
      
      <CardPequeno imagem="https://st3.depositphotos.com/1688079/16329/i/1600/depositphotos_163293332-stock-photo-email-icon-elegant-black-round.jpg"
      titulo="E-mail:"
      descricao="Luclamei16@gmail.com"
      />
      
      <CardPequeno imagem="https://png.pngtree.com/png-clipart/20200224/original/pngtree-address-icon-isolated-on-abstract-background-png-image_5218933.jpg"
      titulo="Endereço:"
      descricao="Vila Santa Maria, Zona Norte, SP"
      />
      
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.6435-9/66862049_2110422845919067_6808429634187689984_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8UrjulMGa6QAX9UlnhQ&_nc_ht=scontent.fcgh12-1.fna&oh=776f3e9106d380a8beb0154ad803057e&oe=60F2C795" 
          nome="N Sabino" 
          descricao="Editor Chefe de Imagem e Vídeo na empresa de marketing digital NSabino." 
        />
        
        <CardGrande 
          imagem="https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.6435-9/183393999_149217963878735_5134652316376203274_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=I-gk3nbuV1cAX-G0lpO&_nc_ht=scontent.fcgh12-1.fna&oh=f53caaaf1f375b9ad7183e7b0def1249&oe=60F2EE5E" 
          nome="Almajid Lounge" 
          descricao="Gerente do Lounge e Tabacaria Almajid." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
