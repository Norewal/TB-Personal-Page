import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { theme } from '../../theme';

const ContactForm = styled.form`
  text-align: center;
  margin: 100px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContactFormHeader = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;
const ContactFormBody = styled.div``;

const StyledInput = styled.input`
  border: 3px solid ${theme.green};
  background-color: ${theme.white};
  width: 100%;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  font-size: 15px;
  color: ${theme.blue};
  font-weight: 300;

  &:first-child {
    margin-right: 5px;
  } 
  @media screen and (max-width: 540px) {
    margin: 5px 0;
  }
`;

const StyledTextArea = styled.textarea`
  border: 3px solid ${theme.green};
  background-color: ${theme.white};
  width: 100%;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  font-size: 15px;
  color: ${theme.blue};
  font-weight: 300;

  @media screen and (max-width: 540px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.input`
  background-color: ${theme.darkblue};
  width: 20%;
  border-radius: 3px;
  border: 0;
  padding: 20px;
  margin-bottom: 10px;
  /*display: block; */
  font-family: 'Gotham-Bold';
  font-size: 15px;
  color: ${theme.white};
  font-weight: 300;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${theme.green};
  }

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export default function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        e.target,
        process.env.GATSBY_USER_ID
      )

      .then(
        (result) => {
          console.log(result.text);
          alert('Your mail is sent!');
        },
        (error) => {
          console.log(error.text);
          alert('FAILED!' + error);
        }
      );
    e.target.reset();
  }

  return (
    <ContactForm onSubmit={sendEmail}>
      {/* <input className="input" type="hidden" name="contact_number"placeholder="Name" /> */}
      <ContactFormHeader>
          <StyledInput type="text" name="name" placeholder="Name" aria-label = "Name" required />
          <StyledInput type="email" name="email" placeholder="Email" aria-label = "Email" required />
      </ContactFormHeader>
      <ContactFormBody>
          <StyledInput type="text" name="subject" placeholder="Subject" aria-label = "Subject" required />
          <StyledTextArea
            name="message"
            placeholder="Message"
            aria-label = "Message"
            rows="10"
            required
          />
    
      </ContactFormBody>
      <ButtonContainer>
        <StyledButton type="submit" value="Let's talk" />
      </ButtonContainer>
    </ContactForm>
  );
}
