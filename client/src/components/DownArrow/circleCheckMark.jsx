import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CheckMarkIcon = styled.div `
    color: ${theme.secondary};
    font-size: 20px;
    width: 20px;
    margin-right: 10px;
`;


export default function CircleCheckMark() {
    return (
        <div>
            
                <CheckMarkIcon>
                    <FontAwesomeIcon icon={ faCheckCircle } />
                </CheckMarkIcon>
            
        </div>
    )
}
