import React from 'react';
import styled from 'styled-components';
import ContainerBox from '../../components/container/container';
import CircleCheckMark from '../../components/DownArrow/circleCheckMark';
import { theme } from '../../theme';
import SubscribeForm from '../../components/Subscribe/SubscribeForm';
import Layout from '../../components/Layout';

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0px auto 50px;
  align-content: center;
  color: ${theme.white};

  @media screen and (max-width: 490px) {
    flex-direction: column;
  }
`;

const StyledSpan = styled.span`
  font-weight: 800;
  padding-left: 10px;

  @media screen and (max-width: 490px) {
    align-self: flex-end;
    padding: 20px 0 0 0;
  }
`;

const StyledP = styled.p`
  color: ${theme.white};
  padding: 10px 0;
`;

const ListContainer = styled.div`
  color: ${theme.white};
  max-width: 50%;
  margin: 50px auto;

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
  margin: 100px 0 0;
  padding-bottom: 50px;
`;

const SubscribeBox = styled.div`
  margin: 0 auto;
  padding: 50px 0 0;
  text-align: center;
`;

export default function BioBey() {
  return (
    <div style={{ backgroundColor: theme.blue, marginTop: '50px' }}>
      <ContainerBox style={{ flexDirection: 'column' }}>
        <StyledTitle>
          What is the scope of<StyledSpan>BioBey</StyledSpan>
        </StyledTitle>
        <StyledP>
          When I started working with LC-MS, it wasn’t very easy to find
          relevant information, either free or not, especially if my search was
          related to practical knowledge.
        </StyledP>
        <StyledP style={{ textAlign: 'center', margin: '20px' }}>
          This is among the purposes of{' '}
          <span style={{ fontWeight: '800', margin: '0' }}>BioBey</span>
        </StyledP>
        <ListContainer>
          <ListItem>
            <CircleCheckMark />
            To make things convenient for you.{' '}
          </ListItem>
          <ListItem>
            <CircleCheckMark />
            To save time for you so that you can easily find relevant knowledge,
            that may be hard to find or learn from others.{' '}
          </ListItem>
          <ListItem>
            <CircleCheckMark />
            To make loads of calculations online easily, while you can find
            great, practical tutorials, as well as all the related guidelines
            and regulations at a single place.
          </ListItem>
        </ListContainer>
        <StyledP>
          I will provide loads of knowledge including basic laboratory skills
          (health and safety, balances, pipettes, mixers, centrifuges, fridges
          and freezers, etc.), HPLC and LC-MS basics, as well as practical
          method development strategies and troubleshooting, together with
          sample preparation techniques (e.g. PPT, LLE, SLE, SPE).
        </StyledP>
        <SubscribeContainer>
          <StyledP>
            Please contact me if you want to get more information, or have any
            notes, suggestions for me.
          </StyledP>
          <StyledP style={{ fontWeight: '800', marginTop: '50px' }}>
            And
          </StyledP>
          <StyledP>Subscribe to my newsletter & stay update!</StyledP>
          <SubscribeBox>
            <SubscribeForm />
          </SubscribeBox>
        </SubscribeContainer>
      </ContainerBox>
    </div>
  );
}
