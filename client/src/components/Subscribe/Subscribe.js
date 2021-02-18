import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';


const StyledSubscribe = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const StyledSubscribeEmail = styled.input`
    height: 55px;
    width: 400px;
    margin-right: 10px;
    padding-left: 20px;
    border-radius: 5px;
    background-color: ${theme.white};
    color: ${theme.green};
    font-size: 18px;
    font-weight: 300;
    display: block;

    &::placeholder {
        color: ${theme.blue};
    }

    @media screen and (max-width: 480px) {
        margin-right: 0px;
        text-align: center;
        padding-left: 0px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        font-size: 16px;
    }

    /*&:focus,:hover {
        border-color: red;
    } */
`;

const StyledSubscribeButton = styled.button`
    padding: 16px 33px;
    border-radius: 5px;
    border: 2px solid ${theme.blue};
    background-color: ${theme.white};
    color: ${theme.blue};
    font-family: "Gotham-Bold";
    font-size: 16px;
    outline: none;
    transition: all 250ms ease-in-out;
    cursor: pointer;

    &:hover, :focus {
        background-color: ${theme.green};
        border: 2px solid ${theme.green};
        color: ${theme.white};
    }

    @media screen and (max-width: 480px) {
        padding: 15px;
        margin: 0 auto;
        width: 100%;
    }
`;



class Subscribe extends Component {

    state = {
        email: ""
    }

    handleChange = e => {
        this.setState({ email: e.target.value.trim() });  //trim = not be empty place inside the email address
        
    }
    
    handleSubmit = e => {
        e.preventDefault();  //not refreshing the page when the submit btn pressed
        
        //this is from backend
        if (this.state.email) {
            fetch(`/api/memberAdd?email=${this.state.email}`)
            .then(res => res.json())
            .then(json => {
                if (json.status === "subscribed") {
                    this.props.configureNotification("success")
                } else if (json.title === "Member Exists") {
                    this.props.configureNotification("warning")
                } else {
                    this.props.configureNotification("danger")
                }
                this.props.showNotification();
            })
            .catch(err => {
                console.log("error", err);
            })
        /*this.props.changeLogoSpeed();*/
            this.setState({ email: "" });
        }
        
    }

    
    
    render() {

        const { placeholder, buttonText } = this.props;

        return (
            <StyledSubscribe onSubmit={this.handleSubmit}>
                <StyledSubscribeEmail
                aria-label="Enter Email Address"
                name="email"
                type="email"
                placeholder= {placeholder}
                onChange={this.handleChange}
                value={this.state.email}
                />
                <StyledSubscribeButton type="submit">
                    {buttonText}
                </StyledSubscribeButton>
            </StyledSubscribe>
        )
    }
}



export default Subscribe;