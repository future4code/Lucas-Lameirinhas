import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import useForm from './hooks/UseForm'
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
h1{
    color: black;
    font-weight: 100;
    font-size: 45px;
}
`

const InputsContainer = styled.div`
display: flex;
flex-direction: column;
height: 100px;
`

const StyledInputs = styled.input`
width: 200px;
margin:auto;
border-radius: 20px;
height: 30px;
padding: 5px;
`

const ButtonDiv = styled.div`
width: 256px;
display: flex;
justify-content: space-between;
margin: auto;
margin-top: 3px;
`

const Div = styled.div`
height: 300px;
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


const BASE_URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Lameirinhas-Lovelace`

export const LoginPage = () => {
    const { form, onChange, cleanFields } = useForm({ email: '', password: '' })


    const history = useHistory()

    const goBack = () => {
        history.push("/")
    }


    const postLogin = (event) => {
        event.preventDefault();


        axios.post(`${BASE_URL}/login`, form)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                history.push("/login")
                cleanFields()
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    return (
        <Container>
            <Div>
                <h1>Login</h1>
                <form onSubmit={postLogin}>
                    <InputsContainer>
                        <StyledInputs
                            name={'email'}
                            placeholder={'E-mail'}
                            value={form.email}
                            onChange={onChange}
                            type={'email'}
                            required
                        />
                        <StyledInputs
                            name={'password'}
                            placeholder={'Senha'}
                            value={form.password}
                            onChange={onChange}
                            type={'password'}
                            required
                        />
                    </InputsContainer>
                    <ButtonDiv>
                        <Button onClick={goBack}>Voltar</Button>
                        <Button>Entrar</Button>
                    </ButtonDiv>
                </form>
            </Div>
        </Container>
    )
}