import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
`

const StyledButton = styled.button`
width: 100px;
color: white;
height: 40px;
border-radius: 30px;
border: none;
background-color: black;
:hover{
    cursor: pointer;
    border-radius:0px;
}
`

const InfoDiv = styled.div`
flex-direction: column-reverse;
justify-content: center;
display: flex;
margin: auto;
h1{
    color: black;
}
`
const Buttons = styled.div`
width: 250px;
display: flex;
justify-content: space-between;
margin: 30px;
`

const TripsDiv = styled.div`
border-radius: 10px;
border: 1px solid black;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15px;
h1{
    font-size: 30px;
}
h4{
    font-size: 20px;
    
}
`

const BASE_URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-lameirinhas-lovelace`

export const ListTripsPage = () => {
    const [arrayOfTrips, setArrayOfTrips] = useState([])

    const history = useHistory()

    const renderMainPage = () => {
        history.push('/')
    }

    const renderApplicationFormPage = (id) => {
        history.push(`/trips/application`)
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/trips`)
            .then((response) => {
                setArrayOfTrips(response.data.trips)
                console.log("deu certo")
            })
            .catch((error) => {
                alert(error.response) 
            })
    }, [])

    const mapedTrips = arrayOfTrips.map((trip) => {
        return <TripsDiv key={trip.id}>
            <h1>{trip.name}</h1>
            <h4>Título: {trip.name}</h4>            
            <h4>Descrição: {trip.description}</h4>
            <h4>Planeta: {trip.planet}</h4>
            <h4>Duração: {trip.durationInDays}</h4>
            <h4>Data: {trip.date}</h4>

        </TripsDiv>

    })

    return (
        <Container>
            <InfoDiv>
                <h1>Viagens Disponíveis</h1>
                <Buttons>
                    <StyledButton onClick={renderMainPage}>Voltar</StyledButton>
                    <StyledButton onClick={renderApplicationFormPage}>Inscreva-se</StyledButton>
                </Buttons>
            </InfoDiv>
            {mapedTrips}

        </Container>
    )
}