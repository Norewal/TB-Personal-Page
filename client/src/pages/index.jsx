import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Hero from '../components/HeroSection/hero';
import About from '../containers/AboutPage/About';
import BioBey from '../containers/BioBey/BioBey';
import ContactSection from '../containers/ContactSection/ContactSection';
import Services from '../containers/ServicesPage/Services';
import Layout from '../components/Layout';

const HomePage = styled.div``;

const HomeStyles = styled.div``;

export default function Homepage() {
  return (
    <Layout>
      <Helmet title="Tibi oldala"></Helmet>
      <HomePage>
        <HomeStyles>
          <Hero />
          <About />
          <Services />
          <BioBey />
          <ContactSection />
        </HomeStyles>
      </HomePage>
    </Layout>
  );
}
