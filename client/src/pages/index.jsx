import React from 'react';
import styled from 'styled-components';
import Hero from '../components/HeroSection/hero';
import About from '../containers/AboutPage/About';
import BioBey from '../containers/BioBey/BioBey';
import ContactSection from '../containers/ContactSection/ContactSection';
import Services from '../containers/ServicesPage/Services';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import BackgroundBiobey from '../images/BG-Biobey.png';
import BackgroundServices from '../images/BG-Services.png';
import BackgroundAbout from '../images/BG-About5.png';
import BackgroundContact from '../images/BG-Contact.png';

const BGBioBey = styled.div`
  background-image: url(${BackgroundBiobey});
  background-position: top;
  background-repeat: no-repeat;
`;

const BGAbout = styled.div`
  background-position: top right;
  background-repeat: no-repeat;
`;

const BGServices = styled.div`
  background-image: url(${BackgroundServices});
  background-position: bottom right;
  background-repeat: no-repeat;
`;

const BGContact = styled.div`
  background-image: url(${BackgroundContact});
  background-position: bottom left;
  background-repeat: no-repeat;
`;

export default function Homepage() {
  return (
    <Layout>
      <SEO
        title='Home page'
        description='I am Tibor Borsos, the creator and owner of BioBey, a consultancy specialising in training and supporting analytical labs, especially in the field of LC-MC bioanalysis. I offer expertise to laboratories of pharmaceutical companies, universities, start-ups and CROs.'
      />
      <section id='homePage'>
        <Hero />
        <BGAbout>
          <About />
        </BGAbout>
        <BGServices>
          <Services />
        </BGServices>
        <BGBioBey>
          <BioBey />
        </BGBioBey>
        <BGContact>
          <ContactSection />
        </BGContact>
      </section>
    </Layout>
  );
}
