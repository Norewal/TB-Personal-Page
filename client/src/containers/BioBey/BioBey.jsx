import React from 'react';
import styled from 'styled-components';
import ContainerBox from '../../components/container/container';
import CircleCheckMark from '../../components/DownArrow/circleCheckMark';
import { theme } from '../../theme';
import SubscribeForm from '../../components/Subscribe/SubscribeForm';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin: 0px auto 50px;
  align-content: center;
  color: ${theme.white};

  @media screen and (max-width: 550px) {
    display: inherit;
    margin-bottom: 50px;
    text-align: center;
  }
`;

const StyledSpan = styled.span`
  font-weight: 800;
  white-space: pre-wrap;
`;

const StyledP = styled.p`
  color: ${theme.white};
  padding: 10px 0;
  text-align: justify;
  text-justify: inter-word;
`;

const ListContainer = styled.div`
  color: ${theme.white};
  max-width: 50%;
  margin: 20px auto;

  @media screen and (max-width: 600px) {
    max-width: 70%;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

const ListItem = styled.div`
  padding: 20px 0;
  display: flex;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const SubscribeContainer = styled.div`
  text-align: center;
  margin: 50px 0 0;
  padding-bottom: 50px;
`;

const SubscribeBox = styled.div`
  margin: 0 auto;
  padding: 50px 0 0;
  text-align: center;
`;

export default function BioBey() {
  return (
    <section id="biobeySection">
      <div style={{ backgroundColor: theme.darkblue, marginTop: '50px' }}>
        <ContainerBox style={{ flexDirection: 'column' }}>
          <StyledTitle>
            What is the scope of<StyledSpan> BioBey</StyledSpan>?
          </StyledTitle>
          <StyledP>
            When I started working with LC-MS, it wasn’t easy to find
            relevant information, either free or not, especially if my search was
            related to <span style={{ fontStyle: "italic", fontWeight: 'bold'}}>practical</span> knowledge.
          </StyledP>
          <StyledP style={{ textAlign: 'center', margin: '20px' }}>
            That’s why I created {' '}
            <span style={{ fontWeight: '800', margin: '0' }}>BioBey</span>.
            Among my purposes are
          </StyledP>
          <ListContainer>
            <ListItem>
              <CircleCheckMark />
              To save time for you so that you can easily find relevant knowledge
            </ListItem>
            <ListItem>
              <CircleCheckMark />
              To make available a range of bioanalysis related scientific calculations at a single place
            </ListItem>
            <ListItem>
              <CircleCheckMark />
              To give you access to great training materials, as well as a collection of all the related guidelines and regulations
            </ListItem>
            <ListItem>
              <CircleCheckMark />
              To make things convenient for you
            </ListItem>
          </ListContainer>
          <StyledP>
            I provide practical tutorials for basic laboratory skills 
            (health and safety, balances, pipettes, mixers, centrifuges, fridges and freezers, etc.), 
            basic and advanced level HPLC and LC-MS trainings. 
            You can also learn about method development strategies and sample preparation techniques 
            (e.g. PPT, LLE, SLE, SPE), as well as troubleshooting.
          </StyledP>
          <SubscribeContainer>
            <StyledP style={{ textAlign: 'center'}}>
              Please 
              <Link 
              to="/contact" 
              style={{color: "#009962", fontWeight: 'bold', textDecoration: 'none' }}
              >
                {' '}contact me{' '} 
              </Link> 
              if you would like to get more information or have any suggestions for me.
            </StyledP>
          {/* 
            <StyledP style={{ textAlign: 'center'}}>Subscribe to my newsletter & stay updated!</StyledP>
            <SubscribeBox>
              <SubscribeForm />
            </SubscribeBox>
          */ }
          </SubscribeContainer>
        </ContainerBox>
      </div>
    </section>
  );
}
