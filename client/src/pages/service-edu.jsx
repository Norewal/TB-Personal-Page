import React from 'react';
import styled from 'styled-components';
import ContainerBox from '../components/container/container';
import CheckMark from '../components/DownArrow/checkMark';
import Titles from '../components/Titles/Titles';
import { theme } from '../theme';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import SEO from "../components/seo";

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

const ServiceBulletPoint = styled.div`
  padding: 0px 0 50px 0;
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 0 20px 30px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 0px 30px 0px;
  }
`;

const ServiceEduPoint = styled.p`
`;

const ImageContainer = styled.div`
  float: right;
  min-width: 50%;
  min-height: 50%;
  margin: 0 0 20px 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 54, 166, 0.3) 0px 7px 29px 0px;

  @media screen and (max-width: 768px) {
    margin: 0 auto 50px;
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default function ServiceEdu() {

  const data = useStaticQuery(graphql`
        query {
          serviceEducation: file(relativePath: {eq: "serv2-min.jpg"}) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    ` )

  return (
    <section id="educationPage">
      <Layout>
        <SEO title="Education" description="Scientific education and training" />
        <ContainerBox>
          <ServiceEduTitle>
            <Titles>Services</Titles>
          </ServiceEduTitle>
          <Subtitle>Scientific education and training</Subtitle>
          <ServiceEduContent>
            <ImageContainer>
              <Img 
                fluid={data.serviceEducation.childImageSharp.fluid}
                alt="Education"
              />
            </ImageContainer>

            <ServiceBulletPoint>
              <CheckMark />
              <ServiceEduPoint>
                Develop and execute company training programmes (scientific and
                regulatory).
              </ServiceEduPoint>
            </ServiceBulletPoint>
            <ServiceBulletPoint>
              <CheckMark />
              <ServiceEduPoint>
                Online and on-site trainings, tailored to your needs. 
                Learn and gain practical skills at your own pace, whenever you want. 
                Test your knowledge before receiving a certificate. 
                Video trainings on various topics are coming this year!
              </ServiceEduPoint>
            </ServiceBulletPoint>
            <ServiceBulletPoint>
              <CheckMark />
              <ServiceEduPoint>
                Provide insights into the basics of nonclinical and clinical research, including pharmacokinetics and PK calculations.
              </ServiceEduPoint>
            </ServiceBulletPoint>
            <ServiceBulletPoint>
              <CheckMark />
              <ServiceEduPoint>
                Microsoft Excel and Word training: most people who believe they are good at Office can still learn a lot, 
                making their work way more effective. Master your spreadsheets and reports!
              </ServiceEduPoint>
            </ServiceBulletPoint>
            <ServiceBulletPoint>
              <CheckMark />
              <ServiceEduPoint>
                Basic level macro writing training: if you are to start macro writing on your own, for your own tasks, then I can also help you with that. 
                The best way to start preparing your own forms and templates.
              </ServiceEduPoint>
            </ServiceBulletPoint>
            <ServiceBulletPoint>
              <CheckMark />
              <ServiceEduPoint>
                Are you a young scientist, looking for a job? I can prepare you for job interviews while reviewing your CV.
              </ServiceEduPoint>
            </ServiceBulletPoint>
          </ServiceEduContent>
        </ContainerBox>
      </Layout>
    </section>
  );
}
