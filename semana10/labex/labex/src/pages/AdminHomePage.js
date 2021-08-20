import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from './hooks/ProtectedPage'
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
`
const Button = styled.button`
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

const DeleteButton = styled.button`
width: 100px;
color: white;
height: 40px;
border-radius: 30px;
border: none;
background-color: black;
height: 30px;
margin-right: 5px;
:hover{
    cursor: pointer;
    border-radius:0px;
}
`

const ButtonsDiv = styled.div`
width: 550px;
display: flex;
justify-content: space-between;
margin: auto;
`

const ContainerTrip = styled.div`
background: rgba( 244, 243, 243, 0.20 );
border-radius: 10px;
border: 1px solid black;
display: flex;
justify-content: space-between;
margin: auto;
width: 700px;
height: 50px;
margin-top: 15px;
padding: 10px;
:hover{
    cursor: pointer;
}`

const BASE_URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-lameirinhas-lovelace`

export const AdminHomePage = () => {
    const [arrayOfTrips, setArrayOfTrips] = useState([])

    useProtectedPage()

    useEffect(() => {
        axios.get(`${BASE_URL}/trips`)
            .then((response) => {
                setArrayOfTrips(response.data.trips)
            })
            .catch((error) => {
                alert(error.response)
            })
    }, [arrayOfTrips])

    const deleteTrip = (id) => {

        const token = localStorage.getItem('token')
        const header = {
            headers: {
                auth: token
            }
        }

        axios.delete(`${BASE_URL}/trips/${id}`, header)
            .then((response) => {
                alert(response)

            })
            .catch((error) => {
                alert(error)

            })
    }


    const history = useHistory()

    const goBack = () => {
        history.push('/')
    }

    const renderCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const renderLoginPage = () => {
        history.push("/login")
    }

    const goToDetailPage = (id) => {
        history.push(`/admin/trips/${id}`)

    }

    const mapedTrips = arrayOfTrips.map((trip) => {
        return <ContainerTrip
            onClick={() => goToDetailPage(trip.id)}
            key={trip.id}>
            <h2>{trip.name}</h2>
            <div>
                <DeleteButton onClick={() => deleteTrip(trip.id)}>Deletar</DeleteButton>
            </div>
        </ContainerTrip>
    })

    return (
        <Container>

            <ButtonsDiv>
                <Button onClick={goBack}>Voltar</Button>
                <Button onClick={renderCreateTripPage}>Criar Viagem</Button>
                <Button onClick={renderLoginPage}>Logout</Button>
            </ButtonsDiv>
            {mapedTrips}


        </Container>
    )
}