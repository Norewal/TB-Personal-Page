import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';


const TitleContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px auto 100px;
    width: 100%;
    max-width: 960px;
    align-content: center;
    justify-content: center;

    @media screen and (max-width: 480px) {
        margin-bottom: 50px;  
        text-align: center;  
    }
`;

const Title = styled.h1 `
    font-size: 32px;
    font-weight: bold;
    color: ${theme.darkblue};
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: ${theme.green};
    text-underline-position: under;

    @media screen and (max-width: 480px) {
        font-size: 25px;   
    }
`;



export default function Titles(props) {
    return (
        <div>
            <TitleContainer>
                <Title {...props}>{props.children}</Title>
            </TitleContainer>
        </div>
    )
}


