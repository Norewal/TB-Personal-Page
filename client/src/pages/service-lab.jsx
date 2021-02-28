import React from 'react';
import styled from 'styled-components';
import ContainerBox from '../components/container/container';
import CheckMark from '../components/DownArrow/checkmark';
import Titles from '../components/Titles/Titles';
import { theme } from '../theme';
import ServiceLabImage from '../components/images/serv1-min.jpg';
import Layout from '../components/Layout';

const ServiceLabTitle = styled.div`
  display: flex;
  justify-content: left;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Subtitle = styled.h3`
  font-size: 24px;
  color: ${theme.blue};
  font-weight: bold;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

const ServiceLabContent = styled.div`
  margin: 50px 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ServiceLabPoint = styled.p`
  padding: 0px 0 50px 0;
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 0 20px 30px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 0px 30px 0px;
  }
`;

const ServiceLabImg = styled.img`
  float: right;
  min-width: 50%;
  min-height: 50%;
  margin: 0 0 20px 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 54, 166, 0.3) 0px 7px 29px 0px;

  @media screen and (max-width: 768px) {
    margin: 0 auto 50px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default function ServiceLab() {
  return (
    <Layout>
      <ContainerBox>
        <ServiceLabTitle>
          <Titles>Service</Titles>
        </ServiceLabTitle>
        <Subtitle>Laboratory, technology and regulatory</Subtitle>
        <ServiceLabContent>
          <ServiceLabImg src={ServiceLabImage} alt="Laboratory" />
          <ServiceLabPoint>
            <CheckMark />
            Scientific review of contracts, pricing, lab metrics and KPIs
          </ServiceLabPoint>
          <ServiceLabPoint>
            <CheckMark />
            Drafting, reviewing and updating policies, SOPs, forms and study
            plans
          </ServiceLabPoint>
          <ServiceLabPoint>
            <CheckMark />
            Critical review of method development, validation and sample
            analysis study plans and reports
          </ServiceLabPoint>
          <ServiceLabPoint>
            <CheckMark />
            Process review and development for analytical labs: get effective
            with speeding up method development workflows and exploiting all the
            benefits of forms and templates, either with, or without the use of
            macros
          </ServiceLabPoint>
          <ServiceLabPoint>
            <CheckMark />
            Lab development, implementing new technologies: are you planning a
            new lab, or just want to upgrade certain labware? Do you need help
            with URS writing? Seek my help with these
          </ServiceLabPoint>
          <ServiceLabPoint>
            <CheckMark />
            Are you looking for a LIMS or an ELN (electronic laboratory
            notebook)? Or need help with CDISC data management? Contact me for
            help!
          </ServiceLabPoint>
          <ServiceLabPoint>
            <CheckMark />
            Aiding starting up new labs from sketch, setting up procedures
          </ServiceLabPoint>
        </ServiceLabContent>
      </ContainerBox>
    </Layout>
  );
}
