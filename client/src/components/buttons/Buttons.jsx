import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';



const ButtonWrapper = styled.button`
  padding: 16px 33px;
  border-radius: 5px;
  background-color: ${theme.darkblue};
  color: ${theme.white};
  font-family: 'Gotham-Bold';
  font-size: 16px;
  outline: none;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  margin-top: 50px;

  &:hover {
    background-color: ${theme.green};
  }
`;

export default function Buttons(props) {
  return (
    <div>
      <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
    </div>
  );
}
