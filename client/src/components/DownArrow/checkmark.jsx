import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const CheckMarkIcon = styled.div `
    color: ${theme.blue};
    font-size: 20px;
    width: 20px;
    margin-right: 10px;
`;


export default function CheckMark() {
    return (
        <div>
            
                <CheckMarkIcon>
                    <FontAwesomeIcon icon={ faCheck } />
                </CheckMarkIcon>
            
        </div>
    )
}
