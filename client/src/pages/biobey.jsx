import React from 'react';
import BioBey from '../containers/BioBey/BioBey';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import BackgroundBiobey from '../images/BG-Biobey.png';

const BGBioBey = styled.div`
  background-image: url(${BackgroundBiobey});
  background-position: top;
  background-repeat: no-repeat;
`;

export default function BioBeyPage() {
  return (
    <section id='bioBeyPage'>
      <Layout>
        <SEO
          title='Biobey'
          description='When I started working with LC-MS, it wasn’t easy to find relevant information, either free or not, especially if my search was related to practical knowledge.'
        />

        <BGBioBey>
          <BioBey />
        </BGBioBey>
      </Layout>
    </section>
  );
}
