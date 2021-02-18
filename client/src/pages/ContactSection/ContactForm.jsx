import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components'
import { theme } from '../../theme'

const ContactForm = styled.form`
    text-align: center;
    margin: 100px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const StyledInput = styled.input `
    border: 3px solid ${theme.green};
    background-color: ${theme.white};
    width: 70%;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    font-size: 15px;
    color: ${theme.blue};
    font-weight: 300;

    @media screen and (max-width: 540px) {
        width: 100%;
    }
`;

const StyledTextArea = styled.textarea`
    border: 3px solid ${theme.green};
    background-color: ${theme.white};
    width: 70%;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    font-size: 15px;
    color: ${theme.blue};
    font-weight: 300;

    @media screen and (max-width: 540px) {
        width: 100%;
    }
`;

const StyledButton= styled.input `
    background-color: ${theme.blue};
    width: 70%;
    border-radius: 3px;
    padding: 20px;
    margin: 0 auto 10px auto;
    display: block;
    font-family: "Gotham-Bold";
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

        emailjs.sendForm( 
            process.env.REACT_APP_SERVICE_ID , 
            process.env.REACT_APP_TEMPLATE_ID, 
            e.target, 
            process.env.REACT_APP_USER_ID)

        .then((result) => {
            console.log(result.text);
            alert("Your mail is sent!");
        }, (error) => {
            console.log(error.text);
            alert("FAILED!"+ error);
        });
        e.target.reset();
    }

    return (
        <ContactForm  onSubmit={sendEmail}>
            <input className="input" type="hidden" name="contact_number" placeholder="Name" />

            <StyledInput type="text" name="name" placeholder="Name" required/>
            <StyledInput type="text" name="subject" placeholder="Subject" required/>
            <StyledInput 
                type="email" 
                name="email" 
                placeholder="Email" 
                required
            />
        
            <StyledTextArea  
                name="message" 
                placeholder="Message" 
                cols="10"
                rows="6"
                required    
                />

            <StyledButton type="submit" value="Let's Talk"  />
        </ContactForm>
    );
}