import React, { useState, useEffect } from 'react'
import useForm from './hooks/UseForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
`
const Div = styled.div`
display: flex;
flex-direction: column;
width: 300px;
margin:auto;
align-items: center;
`
const InfoDiv = styled.div`
flex-direction: column;
justify-content: center;
display: flex;
margin: auto;
border-radius: 10px;
border: 1px solid black;
width: 600px;
h1{
    color: black;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 60px;
}
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

const ButtonsDiv = styled.div`
width: 250px;
display: flex;
justify-content: space-between;
margin: 30px;
`

const StyledInput = styled.input`
margin-top: 10px;
border-radius: 10px;
height: 30px;
width: 400px;
padding: 5px;
`

const StyledSelect = styled.select`
margin-top: 10px;
border-radius: 10px;
height: 30px;
width: 400px;
`



const BASE_URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-lameirinhas-lovelace`

export const ApplicationFormPage = () => {
    const history = useHistory()
    const goBack = () => {
        history.push("/trips/list")
    }
    const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "", trip: null })

    const [arrayOfTrips, setArrayOfTrips] = useState([])


    const applyToTrip = (event) => {
        event.preventDefault()

        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        axios.post(`${BASE_URL}/trips/${form.trip}/apply`, body)
            .then((response) => {
                alert('Candidatura aplicada com sucesso!', response)
                cleanFields()
            })
            .catch((error) => {
                alert(error)
            })
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/trips`)
            .then((response) => {
                setArrayOfTrips(response.data.trips)

            })
            .catch((error) => {
                alert(error.response)
            })
    }, [])


    const mapedTrips = arrayOfTrips.map((trip) => {
        return <option value={trip.id} key={trip.id}>{trip.name}</option>
    })



    return (
        <Container>
            <form onSubmit={applyToTrip} >
                <InfoDiv>
                    <h1>Se Inscreva para uma Viagem</h1>
                    <Div>
                        <StyledSelect
                            onChange={onChange}
                            value={form['trip']}
                            name={'trip'}
                        >
                            {mapedTrips}
                        </StyledSelect>

                        <StyledInput
                            name={"name"}
                            placeholder={'Nome Completo'}
                            value={form.name}
                            onChange={onChange}
                            pattern={"^.{7,}"}
                            title={"Mínimo 7 letras"}
                            required
                        />
                        <StyledInput
                            name={"age"}
                            placeholder={'Idade'}
                            value={form.age}
                            onChange={onChange}
                            type={'number'}
                            min={18}
                            required
                        />
                        <StyledInput
                            name={"applicationText"}
                            placeholder={'Texto de Candidatura'}
                            value={form.applicationText}
                            onChange={onChange}
                            pattern={"^.{25,}"}
                            title={"Mínimo 25 caracteres"}
                            required
                        />
                        <StyledInput
                            name={"profession"}
                            placeholder={'Profissão'}
                            value={form.profession}
                            onChange={onChange}
                            pattern={"^.{8,}"}
                            title={"Mínimo 8 caracteres"}
                            required

                        />
                        <StyledSelect
                            name={"country"}
                            value={form.country}
                            onChange={onChange}
                            required
                        >
                            <option>Escolha um país</option>
                            <option>Brasil</option>
                            <option>Estados Unidos</option>
                            <option>Japão</option>
                            <option>Argentina</option>
                            <option>Canadá</option>
                            <option>Peru</option>

                        </StyledSelect>

                    </Div>
                    <ButtonsDiv>
                        <StyledButton onClick={goBack}>Voltar</StyledButton>
                        <StyledButton type={'submit'}>Enviar</StyledButton>
                    </ButtonsDiv>

                </InfoDiv>
            </form>

        </Container>
    )
}