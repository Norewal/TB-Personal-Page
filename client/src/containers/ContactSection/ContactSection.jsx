import React from 'react';
import styled from 'styled-components';
import ContainerBox from '../../components/container/container';
import SocialIcons from '../../components/SocialIcons/socialIcons';
import Titles from '../../components/Titles/Titles';
import { theme } from '../../theme';
import Form from './ContactForm';

const ContactDetailsContainer = styled.div`
  display: flex;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContactText = styled.div`
  margin-right: 200px;

  @media screen and (max-width: 960px) {
    margin-right: 100px;
  }

  @media screen and (max-width: 550px) {
    margin: 0;
  }
`;

const StyledQuestion = styled.h2`
  color: ${theme.blue};
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
`;

const StyledP = styled.p`
  text-align: justify;
  text-justify: inter-word;
  
  @media screen and (max-width: 480px) {
    padding-bottom: 30px;
  }
`;

export default function ContactSection() {
  return (
    <section id="contactSection">
      <ContainerBox>
        <Titles>Contact Me</Titles>
        <StyledQuestion>Do you have any notes or queries?</StyledQuestion>
        <ContactDetailsContainer>
          <ContactText>
            <StyledP>
              I am more than happy to take your valuable suggestions related to
              site content, improvements, as well as suggestions on any new
              content, topics that would be of your interest.
            </StyledP>
          </ContactText>
          <SocialIcons/>
        </ContactDetailsContainer>
        <Form />
      </ContainerBox>
    </section>
  );
}
