import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';
import { theme } from '../theme';
import Background from "../components/images/404-2-min.jpg";
import SmallBackground from "../components/images/404-small.jpg";



const Page = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column; 
    text-align: justify;
    text-justify: inter-word;

    @media only screen and (max-width: 800px) {
        background-image: url(${SmallBackground});
    };
`;

const Content = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    
    @media only screen and (max-width: 1024px) {
        max-width: 800px;
        padding: 20px;
        text-align: center;
    };
`;
const StyledError = styled.h1`
    color: ${theme.green};
    font-size: 200px;
    font-weight: bold;

    @media only screen and (max-width: 800px) {
        font-size: 100px;
    };
`;
const H1 = styled.h1`
    color: ${theme.white};
    margin: 0 0 1rem 0;
`;

const StyledSpan = styled.span`
    color: ${theme.green};
`;


export default function NotFound() {
    return (
        <Page>
            <Content>
                <StyledError>404</StyledError>
                <H1>{" "}Uh-oh <StyledSpan> ...</StyledSpan> </H1>
                <H1>What you're looking for couldn't be found</H1>
            </Content>
        </Page>
    )
}
