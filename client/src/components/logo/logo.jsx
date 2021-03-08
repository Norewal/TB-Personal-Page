import React from 'react'
import styled from "styled-components";
import LogoWhite from "../images/logo-w.svg";
import LogoFrame from "../logo/footerLogo";
import { theme } from "../../theme";

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 960px) {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(10%, 25%);
    }
`;


const LogoImg = styled.img `
    width: 3em;
    height: 3em;
    text-decoration: none;
    list-style: none;
`;


const LogoText = styled.div`
    font-size: 23px;
    color: ${theme.white};
    list-style: none;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`; 

export default function Logo() {
    return (
        <div>
            <LogoContainer>
                <LogoFrame/>
            </LogoContainer>
        </div>
    )
}

