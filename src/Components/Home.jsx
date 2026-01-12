import React from 'react';
import Banner from './Banner';

import Services from './Services';
import Categories from './Categories';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import BlogPreview from './BlogPreview';
import Newsletter from './Newsletter';
import FAQ from './FAQ';


const Home = () => {
    return (
        <div>
            <Banner />
            
            <Services />
            <Categories />
            <Highlights />
            <Testimonials />
            <BlogPreview />
            <Newsletter />
            <FAQ />
            
        </div>
    );
};

export default Home;