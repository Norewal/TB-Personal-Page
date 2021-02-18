import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ArrowContainer = styled.div `
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: ${theme.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid transparent;

    &:hover {
        background-color: ${theme.green};
        cursor: pointer;
        transition: all 250ms ease-in-out;
    }

   
`;

const ArrowIcon = styled.div `
    color: ${theme.white};
    font-size: 30px;
    margin-top: 3px;
`;

export default function DownArrow() {
    return (
        <div>
            <ArrowContainer>
                <ArrowIcon>
                    <FontAwesomeIcon icon={faAngleDown} />
                </ArrowIcon>
            </ArrowContainer>
        </div>
    )
}
