import React from 'react';
import BioBey from '../containers/BioBey/BioBey';
import Layout from '../components/Layout';



export default function BioBeyPage() {
  return (
    <section id="bioBeyPage" style={{backgroundColor: "#0036A6"}}>
      <Layout>
        <BioBey />
      </Layout>
    </section>
  );
}
