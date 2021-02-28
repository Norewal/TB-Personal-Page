import React, { useState } from 'react';
import Titles from '../../components/Titles/Titles';
import { theme } from '../../theme';
import { Element } from 'react-scroll';
import ContainerBox from '../../components/container/container';
import styled from 'styled-components';
import EducationImg from '../../components/images/main1-min.jpg';
import LaboratoryImg from '../../components/images/main2-min.jpg';
import CheckMark from '../../components/DownArrow/checkmark';
import ButtonsWhite from '../../components/buttons/WhiteButton';
import { Redirect } from 'react-router-dom';

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

const ServiceContent = styled.p`
  padding: 0 20px 30px;
  text-align: left;
  display: flex;
  margin: auto;
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
              <ServiceTitle>Scientific and education</ServiceTitle>
              <ServiceContent>
                <CheckMark />
                Develop and execute company training programmes (scientific and
                regulatory).
              </ServiceContent>
              <ServiceContent>
                <CheckMark />
                Provide remote or on-site expertise for GLP/GCP regulated
                bioanalytical studies.
              </ServiceContent>
              <ServiceContent style={{ paddingBottom: '80px' }}>
                <CheckMark />
                Online trainings: learn and get practical knowledge at your own
                pace, while you can test your knowledge before gaining a
                certificate. Video trainings on loads of topics are coming this
                year!
              </ServiceContent>
              <StyledButtonsWhite onClick={() => setClickEdu(false)}>
                Read more
              </StyledButtonsWhite>
            </ServiceBox>
            <ServiceBox>
              <ServiceImg src={LaboratoryImg} alt="Homepage Laboratory Image" />
              <ServiceTitle>Laboratory, technology and regulatory</ServiceTitle>
              <ServiceContent>
                <CheckMark />
                Scientific review of contracts, pricing, lab metrics and KPIs
              </ServiceContent>
              <ServiceContent>
                <CheckMark />
                Drafting, reviewing and updating policies, SOPs, forms and study
                plans
              </ServiceContent>
              <ServiceContent style={{ paddingBottom: '80px' }}>
                <CheckMark />
                Critical review of method development, validation and sample
                analysis study plans and reports
              </ServiceContent>
              <StyledButtonsWhite onClick={() => setClickLab(false)}>
                Read more
              </StyledButtonsWhite>
            </ServiceBox>
          </ServicesContainer>
        </ContainerBox>
      </Element>
    </>
  );
}
