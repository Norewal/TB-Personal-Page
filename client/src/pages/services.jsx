import React from 'react';
import Services from '../containers/ServicesPage/Services';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import BackgroundServices from '../images/BG-Services.png';

const BGServices = styled.div`
  background-image: url(${BackgroundServices});
  background-position: bottom right;
  background-repeat: no-repeat;
`;

export default function ServicesPage() {
  return (
    <Layout>
      <SEO title='Services' />
      <BGServices>
        <Services />
      </BGServices>
    </Layout>
  );
}
