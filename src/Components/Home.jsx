import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Services from './Services';
import Categories from './Categories';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import BlogPreview from './BlogPreview';
import Newsletter from './Newsletter';
import FAQ from './FAQ';
import CTA from './CTA';

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <Services />
            <Categories />
            <Highlights />
            <Testimonials />
            <BlogPreview />
            <Newsletter />
            <FAQ />
            <CTA />
        </div>
    );
};

export default Home;