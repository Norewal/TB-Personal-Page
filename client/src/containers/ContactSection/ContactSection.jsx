import React from 'react';
import styled from 'styled-components';
import ContainerBox from '../../components/container/container';
import SocialIcons from '../../components/SocialIcons/socialIcons';
import Titles from '../../components/Titles/Titles';
import { theme } from '../../theme';
import Form from './ContactForm';

const ContactDetailsContainer = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContactText = styled.div`
  margin-right: 50px;

  @media screen and (max-width: 480px) {
    margin: 0;
  }
`;

const StyledH3 = styled.h3`
  color: ${theme.blue};
  font-weight: 800;
  text-transform: uppercase;
`;

const StyledP = styled.p`
  @media screen and (max-width: 480px) {
    padding-bottom: 30px;
  }
`;

export default function ContactSection() {
  return (
    <ContainerBox>
      <Titles>Contact Me</Titles>
      <ContactDetailsContainer>
        <ContactText>
          <StyledH3>If you have any notes or queries.</StyledH3>
          <StyledP>
            I am more than happy to take your valuable suggestions related to
            site content, improvements, as well as suggestions on any new
            content, topics that would be of your interest.
          </StyledP>
        </ContactText>
        <SocialIcons />
      </ContactDetailsContainer>
      <Form />
    </ContainerBox>
  );
}
