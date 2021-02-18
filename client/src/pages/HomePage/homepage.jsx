import React from 'react';
import styled from "styled-components";
import Hero from '../../components/HeroSection/hero';
import About from '../AboutPage/About';
import BioBay from '../BioBay/BioBay';
import ContactSection from '../ContactSection/ContactSection';
import Services from '../ServicesPage/Services';



const HomePage = styled.div `
`;


const HomeStyles = styled.div ` 
`;


export default function Homepage() {
    
    return (
        <HomePage>
            <HomeStyles>
                <Hero />
                <About />
                <Services />
                <BioBay />
                <ContactSection />
            </HomeStyles>
        </HomePage>
    )
}
