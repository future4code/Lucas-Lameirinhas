import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Container, ImagemPerfil, Button, Matches, ContainerBotao, ContainerPerfil, Header, ContainerTitulo, Moldura, DivPerfil, ContainerTexto, DivNomeIdade, DivNome, DivIdade, DivBiografia} from "./Styled"


const urlBase = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-lameirinhas/";

function TelaPerfis(props) {
    const [perfilUsuario, setPerfilUsuario] = useState({})
    const [match, setMatch] = useState()

    useEffect(() => {
        getProfileToChoose()
    }, [])

    useEffect(() => {
        if(match){
            getProfileToChoose()
        }
    }, [match])

    const getProfileToChoose = () => {
        axios.get(`${urlBase}person`).then((res) => {
            setPerfilUsuario(res.data.profile)
        }).catch((err) => {
            alert(err.response.data)
        })
    }


    const choosePersonMatch = (id) => {
        const header = {
                'Content-Type': 'application/json'
        }
        const body = {
            id: id,
            choice: true,
        }
        console.log('body', body)
        axios.post(`${urlBase}choose-person`, body, header).then((res) => {
            setMatch(res.data)
        }).catch((err) => {
            alert(err.response.data)
        })
    }


    const choosePersonNoMatch = (id) => {
        const header = {
                'Content-Type': 'application/json'
        }
        const body = {
            id: {id},
            choice: false,
        }
        axios.post(`${urlBase}choose-person`, body, header).then((res) => {
            setMatch(res.data)
        }).catch((err) => {
            alert(err.response.data)
        })
    }

  return (
    <Container>
        <ContainerPerfil>
            <Header>
                <ContainerTitulo>
                    <h1>Astromatch</h1>
                </ContainerTitulo>
                <Matches onClick={props.telaMatches}><b>Matches</b></Matches>
            </Header>
            
                <Moldura>
                    <DivPerfil>
                        <ImagemPerfil src={perfilUsuario.photo}/>
                        <ContainerTexto>
                            <DivNomeIdade>
                                <DivNome>{perfilUsuario.name}</DivNome>
                                <DivIdade>, {perfilUsuario.age} anos</DivIdade>
                            </DivNomeIdade>
                            <DivBiografia>{perfilUsuario.bio}</DivBiografia>
                        </ContainerTexto>
                       
                    </DivPerfil>
                </Moldura>
            
            <ContainerBotao>
                <Button onClick={()=>choosePersonNoMatch(perfilUsuario.id)}><b>NÃO!</b></Button>
                <Button onClick={()=>choosePersonMatch(perfilUsuario.id)}><b>SIM!</b></Button>
            </ContainerBotao>
        </ContainerPerfil>
    </Container>
  );
}

export default TelaPerfis;