import React from 'react';
import Services from '../containers/ServicesPage/Services';
import Layout from '../components/Layout';
import SEO from "../components/seo";

export default function ServicesPage() {
  return (
    <Layout>
    <SEO title="Services" />
      <Services />
    </Layout>
  );
}
