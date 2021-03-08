import React, { useState } from 'react';
import Titles from '../../components/Titles/Titles';
import { theme } from '../../theme';
import { Element } from 'react-scroll';
import ContainerBox from '../../components/container/container';
import styled from 'styled-components';
import EducationImg from '../../components/images/main1-min.jpg';
import LaboratoryImg from '../../components/images/main2-min.jpg';
import CheckMark from '../../components/DownArrow/checkMark';
import ButtonsWhite from '../../components/buttons/WhiteButton';
import { Redirect } from 'react-router-dom';
import { Link } from 'gatsby';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ServicesContainer = styled.div`
  display: flex;
  width: 960px;
  margin-bottom: 100px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: inline;
  }
`;

const ServiceBox = styled.div`
  width: 400px;
  border-radius: 3px;
  text-align: center;
  padding: 0 0 50px 0;
  margin: 0 auto;
  position: relative;
  box-shadow: rgba(0, 54, 166, 0.3) 0px 7px 29px 0px;

  @media screen and (max-width: 960px) {
    max-width: 350px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 600px;
    margin-bottom: 50px;
  }
`;

const ServiceImg = styled.img`
  width: 100%;
`;

const ServiceTitle = styled.h2`
  padding: 50px 10px;
  color: ${theme.blue};

  @media screen and (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const ServicePoint = styled.div`
  padding: 0 30px 30px;
  text-align: left;
  display: flex;
  margin: auto;
`;

const ServiceContent = styled.p`

`;

const StyledButtonsWhite = styled(ButtonsWhite)`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    position: relative;
    bottom: 0;
  }
`;

export default function Services() {
  const [clickEdu, setClickEdu] = useState(true);
  const [clickLab, setClickLab] = useState(true);

  if (!clickEdu) {
    return <Redirect to="/serviceEdu" />;
  }
  if (!clickLab) {
    return <Redirect to="/serviceLab" />;
  }

  return (
    <>
      <Element name="servicesSection">
        <ContainerBox>
          <Titles>Services</Titles>
          <ServicesContainer>
            <ServiceBox>
              <ServiceImg src={EducationImg} alt="Homepage Education Image" />
              <ServiceTitle>Scientific education</ServiceTitle>

              <ServicePoint>
                <CheckMark />
                <ServiceContent>
                  Training programmes: development and execution of tailored company trainings 
                </ServiceContent>
              </ServicePoint>
              <ServicePoint>
                <CheckMark />
                <ServiceContent>
                  Online trainings: learn and gain practical skills at your own pace, whenever you want.
                  Test your knowledge before receiving a certificate
                </ServiceContent>
              </ServicePoint>
              <ServicePoint style={{ paddingBottom: '80px' }}>
                <CheckMark />
                <ServiceContent>
                  Microsoft Excel and Word training: master your spreadsheets and reports, and learn the basics of macro writing
                </ServiceContent>
              </ServicePoint>
              <Link to="/service-edu">
                <StyledButtonsWhite>
                  Read more
                </StyledButtonsWhite>
              </Link>
            </ServiceBox>



            <ServiceBox>
              <ServiceImg src={LaboratoryImg} alt="Homepage Laboratory Image" />
              <ServiceTitle>Laboratory and regulatory</ServiceTitle>

              <ServicePoint>
                <CheckMark />
                <ServiceContent>
                  Providing remote or on-site expertise for GLP/GCP regulated bioanalytical studies
                </ServiceContent>
              </ServicePoint>
              <ServicePoint>
                <CheckMark />
                <ServiceContent>
                  Scientific review of contracts, pricing, lab metrics and KPIs
                </ServiceContent>
              </ServicePoint>
              <ServicePoint>
                <CheckMark />
                <ServiceContent style={{ paddingBottom: '80px' }}>
                  Process review and development: get effective with speeding up workflows.
                  Drafting, reviewing and updating policies, SOPs, forms and study plan/report templates
                </ServiceContent>
              </ServicePoint>              
              <Link to="/service-lab">
                <StyledButtonsWhite onClick={() => setClickLab(true)}>
                  Read more
                </StyledButtonsWhite>
              </Link>
            </ServiceBox>
          </ServicesContainer>
        </ContainerBox>
      </Element>
    </>
  );
}
