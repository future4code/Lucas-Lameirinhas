import React from 'react';
import styled from 'styled-components'

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    `
    
const Imagem = styled.img`
    width: 30px;
    margin-right: 10px;
    `


const CardPequeno = (props) =>{
    return( 
       <SmallCardContainer> 
           <Imagem src={props.imagem} alt=""/>
        

        <h3><b>{props.titulo}</b></h3>
        <p> {props.descricao} </p>
    </SmallCardContainer>

    )
}

export default CardPequeno