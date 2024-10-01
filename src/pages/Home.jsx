// src/pages/Homepage.js
import React from 'react';
import './Home.css';
import HeroSection from "../components/HeroSection.jsx";
import OfferSection from "../components/OfferSection.jsx";
import PopularSection from '../components/PopularSection.jsx';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <OfferSection />
            <PopularSection />
        </main>
    )
};

export default Home;
