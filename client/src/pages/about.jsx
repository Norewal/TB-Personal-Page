import React from 'react';
import styled from 'styled-components';
import ContainerBox from '../components/container/container';
import { theme } from '../theme';
import Titles from '../components/Titles/Titles';
import AboutCard from '../containers/AboutPage/AboutCard';
import aboutTimeLine from '../containers/AboutPage/AboutData';
import Layout from '../components/Layout';

const About = styled.div``;

const AboutLongTitle = styled.div`
  display: flex;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  color: ${theme.blue};
  font-weight: bold;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  margin: 0 0 20px;
  text-align: justify;
  text-justify: inter-word;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const TimeLine = styled.div`
  margin: 50px 0;
  padding: 20px 0;
  position: relative;
`;

const SecondPart = styled.div`
  margin: 100px 0;
  position: relative;
`;
const Line = styled.div`
  background-color: ${theme.green};
  width: 10px;
  height: 98%;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0%);
  border-radius: 5px;

  @media screen and (max-width: 480px) {
    left: 97%;
  }
`;

function createCard(timeLine) {
  return (
    <AboutCard
      id={timeLine.id}
      key={timeLine.id}
      title={timeLine.title}
      description1={timeLine.description1}
      description2={timeLine.description2}
      description3={timeLine.description3}
      description4={timeLine.description4}
      bulletPoint={timeLine.imgURL}
    />
  );
}

export default function AboutLong() {
  return (
    <Layout>
      <About>
        <ContainerBox>
          <AboutLongTitle>
            <Titles>About Me</Titles>
          </AboutLongTitle>
          <Paragraph>
            I am a chemist with strong IT skills who has over 13 years of
            experience in analytical chemistry. I am a really fortunate person
            as I had the chance to work with and gain knowledge on quite a broad
            range of tasks and instrumentation related to pharmaceutical R&D,
            preclinical and clinical studies, including GMP, GLP and GCP
            regulated areas.
          </Paragraph>

          <TimeLine>
            <Line></Line>
            <div>{aboutTimeLine.map(createCard)}</div>
          </TimeLine>

          <SecondPart>
            <Subtitle>TECHNICAL SKILLS</Subtitle>
            <Paragraph>
              I have strong IT skills, and I am advanced user of Sciex Analyst,
              but also worked with MassLynx, as well as Thermo’s XCalibur and
              LCquan, but have good knowledge of other software packages, and
              Watson LIMS.
            </Paragraph>
            <Paragraph>
              I used robotic liquid handlers such as TomTec Quadra or CyBio
              SELMA, and had pivotal role in finding a new, advanced level
              liquid handler for one of the labs.
            </Paragraph>
            <Paragraph>
              I take pride in that the macros and templates I created are used
              by over 100 scientists at multiple companies, on a daily basis.
            </Paragraph>
            <Paragraph>
              I was so lucky that I gained insights into most parts of nonclinical tests, 
              including dosing of test subjects, a range of TK studies, 
              in vitro and ADME work, and metabolite identification.
            </Paragraph>
            <Paragraph>
              I learnt at some of the biggest and best bioanalytical labs in the UK and Europe. 
              Each place provided something extra and new. 
              It was very interesting to see the different approaches to certain tasks at each place.
            </Paragraph>
            <Paragraph>
              These altogether became the basis of my approach to method development, 
              troubleshooting and documentation, to make tasks more effective.
            </Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>
              I would like to present you this combined knowledge, the essence of what I learnt at all these excellent labs.
            </Paragraph>
            <Subtitle style={{ marginTop: '50px' }}>PERSONAL</Subtitle>
            <Subtitle>FAMILY</Subtitle>
            <Paragraph>
              I am a very happy and proud father of two wonderful kids, and live
              together with my beautiful wife.
            </Paragraph>
            <Subtitle>HOBBIES</Subtitle>
            <Paragraph>
              In my free time (what’s that?), I (would) enjoy a wide range of
              activities (cycling, hiking, running, taking photos) and
              passivities, including reading, listening to quality music, and
              watching movies.
            </Paragraph>
          </SecondPart>
        </ContainerBox>
      </About>
    </Layout>
  );
}
