import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonsWhite from '../../components/buttons/WhiteButton'
import validator from "validator";
import PropTypes from "prop-types";


import { theme } from '../../theme'

const SubscribeBox = styled.div `
    margin: 0 auto;
    padding: 80px 0 0;
    text-align: center;
`;

const StyledInput = styled.input `
    border: 3px solid ${theme.secondary};
    background-color: white;
    width: 50%;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    font-size: 18px;
    color: ${theme.primary};
    font-weight: 300;

    @media screen and (max-width: 600px) {
        width: 100%;
        font-size: 16px;
    }
`;

const StyledButtonsWhite = styled(ButtonsWhite)`
    margin-top: 0px;
    width: 50%;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export default function Newsletter({fName, lName, email, handleOnChangeFName, handleOnChangeLName, handleOnChangeEmail, handleSendFName, handleSendLName, handleSendEmail}) {

    return (
        <div>
            <SubscribeBox>
            {/* <h1>Hello {contact.fName}</h1>*/}
                <form
                    className="newsletter-form"
                    action="javascript:void(0)"
                    method="POST"
                >   
                    <StyledInput
                        onChange={({target}) => handleOnChangeFName(target.value)}
                        name='fName'
                        value={fName}
                        placeholder="First Name"
                    />
                    <StyledInput
                        onChange={({target}) => handleOnChangeLName(target.value)}
                        name='lName'
                        value={lName}
                        placeholder="Last Name"
                    />
                    <StyledInput
                        onChange={({target}) => handleOnChangeEmail(target.value)}
                        name='email'
                        value={email}
                        placeholder="Email"
                    />
                    <StyledButtonsWhite 
                        htmlType="submit"
                        onClick={() => handleSendEmail(email)}
                        disabled={!validator.isEmail(email)}
                    >
                        Submit
                    </StyledButtonsWhite>
                </form>
            </SubscribeBox>
        </div>
    )

    Newsletter.propTypes = {
        email: PropTypes.string,
        handleOnChangeEmail: PropTypes.func,
        handleSendEmail: PropTypes.func
    }
}
