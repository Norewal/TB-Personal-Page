import React from 'react'
import styled from "styled-components";
import { theme } from "../../theme";
/*import { Element, scroller } from "react-scroll";
import ScrollDown from "../DownArrow/scrollDown";*/
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';



const Overlay = styled.div `
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
    align-items: center;
    color: white;
`;

const Content = styled.div `
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: column; 
    text-align: justify;
    text-justify: inter-word;
    
    @media only screen and (min-width: 731px) and (max-width: 940px) and (orientation: landscape) {
        height: 82vh;
    }
    @media only screen and (max-width: 720px) and (orientation: landscape) {
        height: 90vh;
    }
    @media only screen and (max-width: 667px) and (orientation: landscape) {
        height: 100vh;
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

    @media only screen and (min-width: 812px) and (max-width: 940px) and (orientation: landscape) {
        padding-right: 0;
    }

    @media screen and (max-width: 768px) {
        margin: auto;
        padding: 0;
    } 

    @media only screen and (max-width: 730px) and (orientation: landscape) {
        width: 90%;
    }
`;

const Main = styled.h2 `
    margin-bottom: 20px;
    font-weight: bold;

    @media only screen and (min-width: 731px) and (max-width: 940px) and (orientation: landscape) {
        margin-bottom: 10px;
        font-size: 18px;
    }
    @media only screen and (max-width: 730px) and (orientation: landscape) {
        font-size: 18px;
    }
`;

const HeroText = styled.h3 `
    line-height: 35px;
    padding-bottom: 10px;

    @media only screen and (min-width: 731px) and (max-width: 940px) and (orientation: landscape) {
        line-height: 20px;
        font-size: 14px;
        padding-bottom: 5px;
    }

    @media only screen and (max-width: 730px) and (orientation: landscape) {
        font-size: 14px;
        line-height: 20px;
    }

    @media screen and (max-width: 480px) {
        line-height: 20px;
        font-size: 16px;
    }
    
`;

const SpamGreen = styled.span`
    color: ${theme.green};
    font-size: 30px;

    @media only screen and (min-width: 731px) and (max-width: 940px) and (orientation: landscape) {
        font-size: 20px;
    }
    @media only screen and (max-width: 730px) and (orientation: landscape) {
        font-size: 20px;
    }
    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

const StyledLine = styled.hr`
    background-color: ${theme.green};
    height: 1px;
    border: none;
`;

/*const DownArrowContainer = styled.div `
    position: absolute;
    margin-top: 20px;
    left: 50%;
    transition: translateX(-50%); 
`; */



export default function Hero() {

    /*const scrollToNextSection = () => {
        scroller.scrollTo("aboutSection", { smooth: true, duration: 1500 })
    } */

    const data = useStaticQuery(graphql`
        query {
            backgroundImage: file(relativePath: {eq: "bgMin.jpg"}) {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    ` )

    return (
        <>
        <section id="heroSection">
            <BackgroundImage 
                fluid={data.backgroundImage.childImageSharp.fluid}
                fadeIn
                style={{height: "100vh", width: "100%"}}
            >
                <Overlay>
                    <Content>
                        <HeroContent>
                            <Main>Welcome to my personal page!</Main>
                            <HeroText>I am <SpamGreen>Tibor Borsos</SpamGreen>, </HeroText>
                            <HeroText>the creator and owner of <span style={{ fontWeight: "bold"}}>BioBey</span>, a consultancy specialising in <span style={{ fontWeight: "bold"}}>training</span> and supporting <span style={{ fontWeight: "bold"}}>analytical labs</span>, especially in the field of <span style={{ fontWeight: "bold"}}>LC-MC</span> bioanalysis</HeroText>
                            <br></br>
                            <StyledLine />
                            <br></br>
                            <HeroText>I offer expertise to laboratories of pharmaceutical companies, universities, start-ups and CROs. </HeroText>                       
                            <HeroText>My ”end-to-end” services include finding the best instrumentation to your needs, process planning, staff training, and much more!</HeroText>
                            {/*<DownArrowContainer onClick={scrollToNextSection}>
                                <ScrollDown />
                            </DownArrowContainer>*/}
                        </HeroContent>
                    </Content>
                </Overlay>
            </BackgroundImage>
        </section>   
        </>
    )
}
