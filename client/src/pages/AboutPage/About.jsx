import React, { useState } from 'react';
import styled from 'styled-components';
import Titles from '../../components/Titles/Titles';
import AboutImage from "../../components/images/about.jpg";
import { theme } from '../../theme';
import { Element } from "react-scroll";
import Buttons from '../../components/buttons/Buttons';
import ContainerBox from '../../components/container/container';
import { Redirect } from 'react-router-dom';



const AboutContainer = styled.div `
    display: flex;

    @media screen and (max-width: 600px) {
        display: inline;
    }
`;

const AboutImg = styled.img `
    height: 10%;
    width: 50%;
    margin-top: 3px;
    box-shadow: rgba(0, 54, 166, 0.3) 0px 7px 29px 0px;

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0;
    }
`;

const AboutContent = styled.div `
    color: ${theme.black};
    padding: 0 0 0 50px;

    @media screen and (max-width: 768px) {
        padding: 0 0 0 20px;
    }

    @media screen and (max-width: 600px) {
        margin-top: 30px;
        padding: 0;
    }
`;

const StyledParagraph = styled.p`
    padding: 0 0 30px;
`;

const StyledButtons = styled(Buttons)`

    @media screen and (max-width: 600px) {
        display: flex;
        margin: 30px auto 50px;
    }
`;


export default function About() {

    const [click, setClick] = useState(true);

    if(!click) {
        return <Redirect to="/about" />
    }


    
    return (
        <div id="about">
            <Element name="aboutSection">
                <ContainerBox>
                    <Titles>About Me</Titles>
                    <AboutContainer>
                        <AboutImg src={AboutImage} alt="profile-pic" />
                        <AboutContent>
                            <StyledParagraph>I am a chemist with over 13 years of experience in analytical chemistry in the pharma and CRO industry. I have worked under GMP, GLP and GC(L)P regulated areas as well, with a wide range of instrumentation and studies.</StyledParagraph>
                            <StyledParagraph>I have experience in PK/TK data management and was a user of WinNonlin for NCA and BE confidence interval calculations. I also have experience with data management according to CDISC standards. </StyledParagraph>
                            <StyledParagraph>I am familiar with the use of Watson LIMS, including setting up projects, study designs, decision trees, as well as sample management.</StyledParagraph>
                            <StyledParagraph>I have spent loads of hours into developing this site and its content and hope you and your company will be able to make a good use of it.</StyledParagraph>
                            <StyledButtons onClick={() => setClick(false)}>Read more</StyledButtons>
                        </AboutContent>
                    </AboutContainer>
                </ContainerBox>
            </Element>
        </div>
    )
}
