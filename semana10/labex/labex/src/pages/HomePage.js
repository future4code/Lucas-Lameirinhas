import React from "react"
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const MainContainer = styled.div`
height: 100vh;
`
const Div = styled.div`
display:flex;
flex-direction: row;
`
const Logo = styled.h1`
font-weight: 100;
font-size: 150px;
color: black;
margin-left: 300px;
`
const ButtonsDiv = styled.div`
width: 250px;
display: flex;
justify-content: space-between;
 margin: 30px; 
 margin-left: 360px;
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

export const HomePage = () => {

    const history = useHistory()

    const renderListTripsPage = () => {
        history.push("/trips/list")
    }

    const renderLoginPage = () => {
        history.push("/login")
    }

    return (
        <MainContainer>
            <Div>
                <Logo>LabeX</Logo>
            </Div>
            <ButtonsDiv>
                <StyledButton onClick={renderListTripsPage}>Viagens</StyledButton>
                <StyledButton onClick={renderLoginPage}>Login</StyledButton>
            </ButtonsDiv>
        </MainContainer>
    )
}