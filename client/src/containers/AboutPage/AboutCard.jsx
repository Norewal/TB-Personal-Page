import React, { useEffect } from 'react'
import styled from 'styled-components';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from '../../theme';

import { useMediaQuery } from "react-responsive";
import Aos from "aos";
import "aos/dist/aos.css";



const Card = styled.div`
    margin: 0px 0;
    padding-bottom: 50px;
    display: flex;
    justify-content: space-between;
    

    @media screen and (max-width: 480px) {
        flex-wrap: wrap;
    }
    
`;
const CardLeft = styled.div`
    width: 45%;
    display: flex;
    position: relative;

    @media screen and (max-width: 480px) {
        width: 95%;
        padding: 0 15px 0 0px;
    }
`;
const CardRight = styled.div`
    /* flex: 1; */
    width: 45%;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin: 120px 0 0;
    
    @media screen and (max-width: 480px) {
        width: 95%;
        margin: 30px 0 0;
        padding: 0 15px 0 0px;
    }
`;
const ContentBox = styled.div`
    
`;

const AboutTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin: 50px 0 20px;
    text-transform: uppercase;
    color: ${theme.blue};
`;

const AboutContent = styled.div`
    padding: 0px 0 0px;
    text-align: justify;
    text-justify: inter-word;

    @media screen and (max-width: 480px) {
        font-size: 14px;
        padding: 0;
    }
`;

const BulletPoint = styled.div`
    width: 45px;
    max-width: 10%;
    height: 45px;
    border-radius: 50%;
    background-color: ${theme.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    border: 2px solid transparent;
    position: relative;
    top: 50px;

    @media screen and (max-width: 480px) {
        position:absolute;
        left: 92%;
        width: 35px;
        height: 35px;
        font-size: 15px;
    }

`;



export default function AboutCard(props) {

    useEffect(() => {
        Aos.init({ duration: 2000 }); 
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

    return (
        <>
        <Card 
            data-aos="fade-up"
            style={{
                flexDirection: props.id % 2 === 0 ? "row-reverse" : "row",
                //marginTop: props.id !== 1 ? "-100px" : "0",
                margin: isMobile && props.id % 2 === 0 ? " 0px 10px 0 -15px" : "0",
                padding: isMobile && props.id % 2 === 0 ? " 0px 0px 0 0px" : "0"
            }}>
            <CardLeft>
                <ContentBox>
                    <AboutTitle>{props.title}</AboutTitle>
                    <AboutContent>{props.description1}</AboutContent>
                    <AboutContent style={{paddingTop: "20px"}}>{props.description3}</AboutContent>
                </ContentBox>
            </CardLeft>
            
            <BulletPoint
                style={{
                    transform: isMobile && props.id % 2 === 0 ? "scaleX(-1)" : "none",
                    margin: isMobile && props.id % 2 === 0 ? " 0 0 0 10px" : "0"
                }}
                >
                <FontAwesomeIcon 
                    icon={faArrowLeft} 
                    style={{
                        transform: props.id % 2 === 0 ? "rotate(180deg)" : "rotate(0deg)", 
                        color: "white"
                        }} />
            </BulletPoint>
            
            <CardRight>
                <AboutContent>{props.description2}</AboutContent>
                <AboutContent>{props.description4}</AboutContent>
            </CardRight>
        </Card>
        </>
    )
}
