import React from 'react';
import Hero from '../components/HeroSection/hero';
import About from '../containers/AboutPage/About';
import BioBey from '../containers/BioBey/BioBey';
import ContactSection from '../containers/ContactSection/ContactSection';
import Services from '../containers/ServicesPage/Services';
import Layout from '../components/Layout';
import SEO from '../components/seo';

export default function Homepage() {
  return (
    <Layout>
      <SEO
        title='Tibo Borsos'
        description='I am Tibor Borsos, the creator and owner of BioBey, a consultancy specialising in training and supporting analytical labs, especially in the field of LC-MC bioanalysis. I offer expertise to laboratories of pharmaceutical companies, universities, start-ups and CROs.'
        image=''
      />
      <section id='homePage'>
        <Hero />
        <About />
        <Services />
        <BioBey />
        <ContactSection />
      </section>
    </Layout>
  );
}
