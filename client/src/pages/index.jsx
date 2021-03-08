import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/HeroSection/hero';
import About from '../containers/AboutPage/About';
import BioBey from '../containers/BioBey/BioBey';
import ContactSection from '../containers/ContactSection/ContactSection';
import Services from '../containers/ServicesPage/Services';
import Layout from '../components/Layout';



export default function Homepage() {
  return (
    <Layout>
      <Helmet title="Tibor Borsos"></Helmet>
      <section id="homePage">
          <Hero />
          <About />
          <Services />
          <BioBey />
          <ContactSection />
      </section>
    </Layout>
  );
}
