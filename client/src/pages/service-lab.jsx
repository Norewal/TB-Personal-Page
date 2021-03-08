import React from 'react';
import styled from 'styled-components';
import ContainerBox from '../components/container/container';
import CheckMark from '../components/DownArrow/checkMark';
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
    <section id="laboratoryPage">
      <Layout>
        <ContainerBox>
          <ServiceLabTitle>
            <Titles>Services</Titles>
          </ServiceLabTitle>
          <Subtitle>Laboratory, technology and regulatory</Subtitle>
          <ServiceLabContent>
            <ServiceLabImg src={ServiceLabImage} alt="Laboratory" />
            <ServiceLabPoint>
              <CheckMark />
              Providing remote or on-site expertise for GLP/GCP regulated bioanalytical studies.
            </ServiceLabPoint>
            <ServiceLabPoint>
              <CheckMark />
              Scientific review of contracts, pricing, lab metrics and KPIs.
            </ServiceLabPoint>
            <ServiceLabPoint>
              <CheckMark />
              Process review and development: get effective with speeding up workflows. 
              Drafting, reviewing and updating policies, SOPs, forms and study plan/report templates.
            </ServiceLabPoint>
            <ServiceLabPoint>
              <CheckMark />
              Critical review of method development, validation and sample analysis study plans and reports.
            </ServiceLabPoint>
            <ServiceLabPoint>
              <CheckMark />
              Lab development, implementing new technologies: aiding the launch of new labs from sketch, setting up procedures.
            </ServiceLabPoint>
            <ServiceLabPoint>
              <CheckMark />
              Help with upgrading or purchasing labware: from URS writing to choosing the best fit to your needs.
            </ServiceLabPoint>
            <ServiceLabPoint>
              <CheckMark />
              Are you looking for a LIMS or an ELN (electronic laboratory notebook)? Or need help with CDISC data management? Contact me for help!
            </ServiceLabPoint>
          </ServiceLabContent>
        </ContainerBox>
      </Layout>
    </section>
  );
}
