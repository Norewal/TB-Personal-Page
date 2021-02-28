import React from 'react';
import { Helmet } from 'react-helmet';
import ContactSection from '../containers/ContactSection/ContactSection';
import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <Helmet title="Tibi oldala - Contacts"></Helmet>
      <ContactSection />
    </Layout>
  );
}
