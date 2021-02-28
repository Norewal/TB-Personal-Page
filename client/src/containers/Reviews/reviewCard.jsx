import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'


const CardContainer = styled.div `
    width: 350px;
    height: 300px;
    background-color: rgba(0, 40, 123, 0.05);
    box-shadow: 3px 3px 7px 0px rgba(0, 40, 123, 0.9);
    border-radius: 3px;
    margin: 0 auto;
    position: relative;
    padding: 10px;
    cursor: grab;
    position: relative;
`;

const QuoteIcon = styled.div`
    position: absolute;
    top: 10px;
    left: 15px;
    color: ${theme.secondary};
    font-size: 30px;
`;

const ReviewText = styled.p`
    font-size: 16px;
    color: ${theme.tertiary};
    font-weight: normal;
    display: flex;
    justify-content: center;
    margin: 50px 6px 50px;
`;

const Line = styled.span`
    min-width: 95%;
    min-height: 1px;
    margin-bottom: 1em;
    background-color: ${theme.secondary};
    display: flex;
    position: absolute;
    bottom: 80px;
`;

const UserContainer = styled.div `
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: absolute;
    bottom: 25px;
`;

const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
`;

const UserJobContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserName = styled.span `
    font-size: 15px;
    color: ${theme.primary};
    margin-left: 20px;
`;

const UserJob = styled.span `
    font-size: 15px;
    color: ${theme.tertiary};
    margin-left: 20px;
`;

export default function ReviewCard(props) {

    const { reviewText, username, userJob, userImgURL } = props;

    return (
        <div>
            <CardContainer>
                <QuoteIcon>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                </QuoteIcon>
                <ReviewText>{ reviewText }</ReviewText>
                <Line />
                <UserContainer>
                    <UserImg src={userImgURL} />
                    <UserJobContainer>
                        <UserName>{username}</UserName>
                        <UserJob>{userJob}</UserJob>
                    </UserJobContainer>
                </UserContainer>
            </CardContainer>
        </div>
    )
}
