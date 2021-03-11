import React from 'react';
import styled from 'styled-components';



const Container = styled.div `
    width: 100%;
    max-width: 960px;
    height: 100%;
    margin: 0px auto;
    padding: 100px 0px;

    @media screen and (max-width: 960px) {
        max-width: 760px;
        margin: 0 auto 50px;
        padding: 80px 20px;
        
    }

    @media screen and (max-width: 480px) {
        padding: 80px 20px;
        
    } 
`;



export default function ContainerBox(props) {
    return (
        <>
            <Container {...props}>{props.children}</Container>
        </>
    )
}
