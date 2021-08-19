import styled from 'styled-components';

export const ImagemPerfil = styled.img `
    height: 100%;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`

export const ContainerMatches = styled.div `
    position: relative;
    height: 70px;
    padding: 10px;
    display: flex;
    width: 100%;
    cursor: pointer;
`
export const Button = styled.button `
    border: 0px;
    background-color: lightblue;
    color: orangered;
    border-radius: 0.5rem;
    cursor: pointer;
` 

export const Container= styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 0.5rem;
    background-color: silver;
    width: 400px;
    height: 600px;
`

export const Header = styled.div `
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    height: 50px;
`