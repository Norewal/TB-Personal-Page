import '@fortawesome/fontawesome-svg-core/styles.css';
import React from 'react';
import MainNavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import './Layout.css';
import '../index.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

function Layout(props) {
  const { children } = props;
  return (
    <div className="main">
      <div className="content">
        <MainNavBar />
        {children}
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default Layout;
