import React from 'react'
import styled from "styled-components";
import Background from "../images/bg1-min.jpg";
import { theme } from "../../theme";
import { Element, scroller } from "react-scroll";



const HeroStyles = styled.div `
    width: 100%;
    /*height: 90vh; */
    padding: 0;
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
    background-color: rgba(10, 53 53, 0.9);
   /* position: relative; */
`;

const Content = styled.div `
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: column; 
    
    @media only screen and (min-width: 812px) and (max-width: 823px) and (orientation: landscape) {
        height: 85vh;
    }

    @media only screen and (min-width: 731px) and (max-width: 736px) and (orientation: landscape) {
        height: 85vh;
    }

    @media only screen and (max-width: 667px) and (orientation: landscape) {
        height: 80vh;
    }
`;

const HeroContent = styled.div`
    width: 100%;
    max-width: 960px;
    margin: auto;
    padding-right: 200px;
    align-content: center;
    color: ${theme.white}; 

    @media screen and (max-width: 1024px) {
        width: 80%;
        padding-right: 100px;
    }

    @media screen and (max-width: 480px) {
        margin: auto;
        padding: 0;
    } 
    @media only screen and (max-width: 667px) and (orientation: landscape) {
        margin: auto;
        padding: 0;
        
    }
`;

const Main = styled.h1 `
    margin-bottom: 20px;
    font-weight: bold;

    @media only screen and (min-width: 812px) and (max-width: 823px) and (orientation: landscape) {
        margin-bottom: 10px;
    }

    @media only screen and (max-width: 667px) and (orientation: landscape) {
        font-size: 25px;
        margin-bottom: 10px;
    }
`;

const Questions = styled.h3 `
    line-height: 35px;

    @media only screen and (min-width: 812px) and (max-width: 823px) and (orientation: landscape) {
        line-height: 25px;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
        
    }

    @media only screen and (max-width: 667px) and (orientation: landscape) {
        font-size: 14px;
        line-height: 25px;
    }
    
`;
/*const DownArrowContainer = styled.div `
    position: absolute;
    bottom: 30px;
    left: 50%;
    transition: translateX(-50%); 

`; */

export default function Hero() {

    /*const scrollToNextSection = () => {
        scroller.scrollTo("aboutSection", { smooth: true, duration: 1500 })
    }*/


    return (
        <>
        <Element name="heroSection">
            <HeroStyles>
                <Content>
                    <HeroContent>
                        <Main>Naughty running cat eat a rug</Main>
                        <Questions>Cat ipsum dolor sit amet, find empty spot in cupboard and sleep all day, yet don't nosh on the birds cccccccaaaaaaatttttttsssssss.</Questions>
                        <Questions> Pushed the mug off the table. Favor packaging over toy purr. I vomit in the bed in the middle of the night i show my fluffy belly but it's a trap!</Questions>
                        <Questions></Questions>
                    </HeroContent>
                    {/*<DownArrowContainer onClick={scrollToNextSection}>
                        <DownArrow />
                    </DownArrowContainer> */}
                </Content>
            </HeroStyles>
        </Element>   
        </>
    )
}
