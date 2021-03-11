import React from 'react'
import styled from "styled-components";
import LogoFooter from "../../images/logo.svg";
import { theme } from "../../theme";



const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 320px) {
        padding-bottom: 20px;
    }
`;

const LogoImg = styled.img `
    width: 3.5em;
    height: 3.5em;
`;

const LogoText = styled.div`
    margin: auto 0 auto 10px;
    font-size: 23px;
    color: ${theme.white};

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`; 



export default function FooterLogo() {
    return (
        <div>
            <LogoContainer>
                <LogoImg src={LogoFooter} alt="Logo-white with border"/>
                <LogoText>Tibor Borsos</LogoText>
            </LogoContainer>
        </div>
    )
}

