// src/pages/Homepage.js
import React from 'react';
import './Home.css';
import HeroSection from "../components/HeroSection.jsx";
import OfferSection from "../components/OfferSection.jsx";

const Home = () => {
    return (
        <main>
            <HeroSection />
            <OfferSection />
        </main>
    )
};

export default Home;
