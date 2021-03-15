import React from 'react';
import ContactSection from '../containers/ContactSection/ContactSection';
import Layout from '../components/Layout';
import SEO from "../components/seo";
import styled from 'styled-components';

const ContactContainer = styled.div `
    

  @media screen and (max-width: 550px) {
    height: 100%;
  }

`;

export default function ContactPage() {
  return (
    <section id="contactPage">
      <Layout>
      <SEO title="Contact Me" description="I am more than happy to take your valuable suggestions related to site content, improvements, as well as suggestions on any new content, topics that would be of your interest." />
        <ContactContainer>
          <ContactSection />
        </ContactContainer>
      </Layout>
    </section>
  );
}
