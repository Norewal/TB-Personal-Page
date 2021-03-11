import React from 'react';
import ContactSection from '../containers/ContactSection/ContactSection';
import Layout from '../components/Layout';
import SEO from "../components/seo";

export default function ContactPage() {
  return (
    <section id="contactPage">
      <Layout>
      <SEO title="Contact Me" description="I am more than happy to take your valuable suggestions related to site content, improvements, as well as suggestions on any new content, topics that would be of your interest." />
        <ContactSection />
      </Layout>
    </section>
  );
}
