import React from 'react';
import styled from "styled-components";
import { theme } from '../../theme';



const ButtonWhiteWrapper = styled.button `
    padding: 16px 33px;
    border-radius: 5px;
    border: 2px solid ${theme.blue};
    background-color: ${theme.white};
    color: ${theme.blue};
    font-family: "Gotham-Bold";
    font-size: 16px;
    outline: none;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    margin-top: 50px;
    
    &:hover {
        background-color: ${theme.green};
        border: 2px solid ${theme.green};
        color: ${theme.white};
    }
`;


export default function ButtonsWhite(props) {
    return (
        <div>
            <ButtonWhiteWrapper {...props}>{props.children}</ButtonWhiteWrapper>
        </div>
    )
}

