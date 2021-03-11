import React from 'react';
import BioBey from '../containers/BioBey/BioBey';
import Layout from '../components/Layout';
import SEO from "../components/seo";


export default function BioBeyPage() {
  return (
    <section id="bioBeyPage" style={{backgroundColor: "#0036A6"}}>
      <Layout>
        <SEO title="Biobey" description="When I started working with LC-MS, it wasn’t easy to find relevant information, either free or not, especially if my search was related to practical knowledge." />
        <BioBey />
      </Layout>
    </section>
  );
}
