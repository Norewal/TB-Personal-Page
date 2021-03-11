import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../theme';



const DownContainer = styled.div`
    position: absolute;
    margin-top: 30px;
    left: 50%;
    bottom: 10%;
    /*transition: translateX(-50%);  */
    transform: translate(-50%, -50%);
    cursor: pointer;
`;

const scroll = keyframes`
    0% {  opacity: 0;  transform: rotate(45deg) translate(-20px, -20px) }
    50% {  opacity: 1; }
    100% { opacity: 0;  transform: rotate(45deg) translate(20px, 20px) }
`;

const Down = styled.span`
    display: block;
    width: 30px;
    height: 30px;
    border-bottom: 5px solid ${theme.blue};
    border-right: 5px solid ${theme.blue};
    transform: rotate(45deg);
    margin: -10px;
    animation: ${scroll} 3s infinite;

    &:nth-child(2){
        animation-delay: -.4s;
    }
    &:nth-child(3){
        animation-delay: -.6s;
    }
`;



export default function ScrollDown() {
    return (
        <div>
            <DownContainer>
                <Down></Down>
                <Down></Down>
                <Down></Down>
            </DownContainer>
        </div>
    )
}