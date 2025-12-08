import React from 'react';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar'
const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;