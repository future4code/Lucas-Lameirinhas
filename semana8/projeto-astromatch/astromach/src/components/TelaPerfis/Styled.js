import styled from 'styled-components';

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
export const ContainerPerfil = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Header = styled.div `
    display: flex;
    justify-content: space-between;
    height: 50px;
`
export const Moldura= styled.div`
    padding: 20px 20px 0px;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
`

export const ContainerTitulo = styled.div `
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: orangered;
`
export const ContainerTexto = styled.div `
    height: 30%;
    width: 100%;
    bottom: 0px;
    position: absolute;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 10px;
    z-index: 2;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    color: white;
`
export const DivNomeIdade = styled.div `
    display: flex;
    -webkit-box-align: baseline;
    align-items: baseline;
`
export const DivNome = styled.div `
    display: block;
    font-weight: bold;
    font-size: 24px;
`   

export const DivIdade = styled.div `
    display: block;
    font-size: 20px;
`   

export const DivBiografia = styled.div `
    display: block;
    font-size: 16px;
`  

export const ContainerBotao = styled.div `
    display: flex;
`

export const DivPerfil = styled.div `
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    height: 430px;
    animation: 0.5s ease 0s 1 normal forwards running none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`

export const ImagemPerfil = styled.img `
    width: 100%;
    height: 100%;
    display: block;
`

export const Button = styled.button `
    margin:auto;
    border: 0px;
    background-color: lightblue;
    color: orangered;
    border-radius: 0.5rem;
    cursor: pointer;
` 

export const Matches = styled.button `
    border: 0px;
    background-color: lightblue;
    border-radius: 0.5rem;
    color: orangered;
    cursor: pointer;
` 
