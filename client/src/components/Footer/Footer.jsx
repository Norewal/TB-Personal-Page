import React from 'react';
import { theme } from '../../theme';
import SocialIcons from '../SocialIcons/socialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import FooterLogo from '../logo/footerLogo';

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${theme.black};
  padding: 1rem 0;

  @media screen and (max-width: 960px) {
    padding: 1rem;
  }

  @media screen and (max-width: 320px) {
    padding: 2rem;
  }
`;

const FirstPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 960px;
  height: 100px;
  margin: 0 auto 0px;
  bottom: 0;
  left: 0;

  @media screen and (max-width: 320px) {
    flex-direction: column;
    height: 100%;
    margin: 20px 0;
  }
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto 0px;
  padding-bottom: 20px;
`;

const CopyRightText = styled.a`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    color: ${theme.green};
  }
`;

const CurrentYear = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin-left: 5px;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

    return (
        <footer>
        <FooterContainer>
            <FirstPart>
                <FooterLogo />
                <SocialIcons />
            </FirstPart>
            <CopyRight>
                <FontAwesomeIcon icon={ faCopyright } style={{color: "rgba(255, 255, 255, 0.5"}} /> 
                <CurrentYear>{currentYear}</CurrentYear>
                <CopyRightText  href="https://www.gabriellajs.digital/" target="_blank" rel="noopener noreferrer"> gabriellaJS</CopyRightText>
            </CopyRight>
        </FooterContainer>
    </footer>
  );
}
