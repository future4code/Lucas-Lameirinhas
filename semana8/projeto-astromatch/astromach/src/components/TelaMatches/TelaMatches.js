import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Container, Header, ImagemPerfil, ContainerMatches, Button} from "./Styled"



const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-lameirinhas/'

function TelaMatches(props) {
  const [perfilMatche, setPerfilMatche] = useState ([])
  
  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    axios.get(`${urlBase}matches`).then((res) => {
      setPerfilMatche(res.data.matches)
    }).catch((err) => {
      alert(err.response.data)
    })
  }

  const clear = () => {
    const header = {
      'Content-Type': 'application/json'
    }
    axios.put(`${urlBase}clear`, header).then((res) => {
      console.log(res.data)
      setPerfilMatche([])
    }).catch((err) => {
     alert(err.response.data)
    })
  }


  return (
    <Container>
      <Header>
       <Button onClick={props.telaPerfis}><b>Perfis</b></Button>
       <Button onClick={clear}><b>Limpar</b></Button>
      </Header>
       <> 
      {console.log('perfilMatche', perfilMatche)}
      {perfilMatche.map((perfil) => {
        return(
          <ContainerMatches>
            <ImagemPerfil src={perfil.photo} />
            <h3>{perfil.name}</h3>
          </ContainerMatches>
        )
      })}
      </>
     
    </Container>
  );
}

export default TelaMatches;