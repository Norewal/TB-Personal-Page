import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Titles from '../../components/Titles/Titles';
import AboutImage from '../../components/images/about.jpg';
import { theme } from '../../theme';
import { Element } from 'react-scroll';
import Buttons from '../../components/buttons/Buttons';
import ContainerBox from '../../components/container/container';
import { Redirect } from 'react-router-dom';

const AboutContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 730px) and (orientation: landscape){
    display: inline;
  }

  @media screen and (max-width: 600px) {
    display: inline;
  }
`;

const AboutImg = styled.img`
  height: 10%;
  width: 50%;
  margin-top: 3px;
  box-shadow: rgba(0, 54, 166, 0.3) 0px 7px 29px 0px;

  @media only screen and (max-width: 730px) and (orientation: landscape){
    display: flex;
    margin: 0 auto;
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

const AboutContent = styled.div`
  color: ${theme.black};
  padding: 0 0 0 50px;
  text-align: justify;
  text-justify: inter-word;

  @media screen and (max-width: 768px) {
    padding: 0 0 0 20px;
  }

  @media only screen and (max-width: 730px) and (orientation: landscape){
    margin-top: 30px;
    padding: 0;
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

  @media only screen and (max-width: 730px) and (orientation: landscape){
    display: flex;
    margin: 30px auto 50px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    margin: 30px auto 50px;
  }
`;

export default function About() {
  return (
    <section id="aboutSection">
      <div>
        <ContainerBox>
          <Titles>About Me</Titles>
          <AboutContainer>
            <AboutImg src={AboutImage} alt="profile-pic" />
            <AboutContent>
              <StyledParagraph>
                I am a chemist with over 13 years of experience in analytical
                chemistry in the pharma and CRO industry. I have worked under
                GMP, GLP and GC(L)P regulated areas as well, with a wide range
                of instrumentation and studies.
              </StyledParagraph>
              <StyledParagraph>
                I have experience in PK/TK data management and was a user of
                WinNonlin for NCA and BE confidence interval calculations. I
                also have experience with data management according to CDISC
                standards.{' '}
              </StyledParagraph>
              <StyledParagraph>
                I am familiar with the use of Watson LIMS, including setting up
                projects, study designs, decision trees, as well as sample
                management.
              </StyledParagraph>
              <StyledParagraph>
                I have spent loads of hours into developing this site and its
                content and hope you and your company will be able to make a
                good use of it.
              </StyledParagraph>
              <Link to="/about" rel="noopener noreferrer">
                <StyledButtons>Read more</StyledButtons>
              </Link>
            </AboutContent>
          </AboutContainer>
        </ContainerBox>
      </div>
    </section>
  );
}
