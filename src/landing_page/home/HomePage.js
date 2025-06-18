import React from 'react'
import Navbar from '../Navbar.js';
import Hero from './Hero.js';
import Awards from './Awards.js'
import Stats from './Stats.js';
import Pricing from './Pricing.js';
import Education from './Education.js';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer.js';
import { useEffect } from 'react';
function HomePage() {
    useEffect(() => {
        localStorage.clear();
        console.log("All localStorage cleared on first load");
    }, []);
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;