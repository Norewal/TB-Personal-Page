import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialIconsContainer = styled.div`
    display: flex;
    
`;
const SocialIcon = styled.div`
    color: ${theme.white};
    background-color: ${theme.darkblue};
    font-size: 35px;
    margin: 0 0 0 10px;
    padding: 0 6px;
    border-radius: 3px;
    cursor: pointer;
    transition: all 200ms ease-in-out;


    &:hover {
        background-color: ${theme.green};
        
    }
`;

export default function SocialIcons() {
    return (
        <div>
        <SocialIconsContainer>
            <SocialIcon>
                <a href="mailto:tiborborsosdr@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={ faEnvelope } style={{color: 'white'}}/>
                </a>
            </SocialIcon>
            <SocialIcon>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faLinkedinIn } style={{color: 'white'}} />
            </a>
            </SocialIcon>
        </SocialIconsContainer>
        </div>
    )
}
