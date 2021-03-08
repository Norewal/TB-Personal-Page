import React from 'react';
import Notification from "./Notification";
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledDescription = styled.div`
    color: ${theme.white};
    
`;

const StyledParagraph = styled.p`
    color: ${theme.white};
`;

const Description = ({ text, src, alt, message, visible, level }) => {
    return (
        <StyledDescription>
            <StyledParagraph> {text} </StyledParagraph>
            <Notification 
            src={src} 
            alt={alt} 
            message={message} 
            visible={visible} 
            level={level} />
        </StyledDescription>
    )
}



export default Description;