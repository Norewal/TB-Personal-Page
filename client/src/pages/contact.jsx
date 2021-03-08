import React from 'react';
import { Helmet } from 'react-helmet';
import ContactSection from '../containers/ContactSection/ContactSection';
import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <section id="contactPage">
      <Layout>
        <Helmet title="Tibor Borsos"></Helmet>
        <ContactSection />
      </Layout>
    </section>
  );
}
