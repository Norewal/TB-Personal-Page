import React from 'react';
import styled from 'styled-components';
import ContainerBox from '../components/container/container';
import CheckMark from '../components/DownArrow/checkmark';
import Titles from '../components/Titles/Titles';
import { theme } from '../theme';
import ServiceEduImage from '../components/images/serv2-min.jpg';
import Layout from '../components/Layout';

const ServiceEduTitle = styled.div`
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

const ServiceEduContent = styled.div`
  margin: 50px 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ServiceEduPoint = styled.p`
  padding: 0px 0 50px 0;
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 0 20px 30px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 0px 30px 0px;
  }
`;

const ServiceEduImg = styled.img`
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

export default function ServiceEdu() {
  return (
    <Layout>
      <ContainerBox>
        <ServiceEduTitle>
          <Titles>Service</Titles>
        </ServiceEduTitle>
        <Subtitle>Scientific and education</Subtitle>
        <ServiceEduContent>
          <ServiceEduImg src={ServiceEduImage} alt="Education" />
          <ServiceEduPoint>
            <CheckMark />
            Develop and execute company training programmes (scientific and
            regulatory).
          </ServiceEduPoint>
          <ServiceEduPoint>
            <CheckMark />
            Provide remote or on-site expertise for GLP/GCP regulated
            bioanalytical studies.
          </ServiceEduPoint>
          <ServiceEduPoint>
            <CheckMark />
            Online trainings: learn and get practical knowledge at your own
            pace, while you can test your knowledge before gaining a
            certificate. Video trainings on loads of topics are coming this
            year!
          </ServiceEduPoint>
          <ServiceEduPoint>
            <CheckMark />
            Understanding the basics of nonclinical and clinical research and
            development, including pharmacokinetics.
          </ServiceEduPoint>
          <ServiceEduPoint>
            <CheckMark />
            Personal and company trainings: I provide online and on-site
            trainings as well, tailored to your needs, including regulatory
            topics. These may include specific areas you are interested in (e.g.
            sample preparation, method development or troubleshooting, etc.).
          </ServiceEduPoint>
          <ServiceEduPoint>
            <CheckMark />
            Are you a university student, preparing for an exam, or your very
            first job interviews? I can help with those as well, and can also
            review your CV.
          </ServiceEduPoint>
          <ServiceEduPoint>
            <CheckMark />
            Microsoft Office (Excel and Word) training: most people who believe
            they are good at Office can still learn a lot, making their work
            more effective. This extended knowledge counts a lot when data
            evaluation and reporting is considered.
          </ServiceEduPoint>
          <ServiceEduPoint>
            <CheckMark />
            Basic level macro writing training: if you are to start macro
            writing on your own, for your or your groups’ tasks, then I can also
            help you with that. The best way to start preparing your own forms
            and report templates.
          </ServiceEduPoint>
        </ServiceEduContent>
      </ContainerBox>
    </Layout>
  );
}
