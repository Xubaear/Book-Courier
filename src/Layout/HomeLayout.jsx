import React from 'react';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import DashboardSidebar from '../Pages/DashboardSidebar';


const HomeLayout = () => {
    return (
        <div className="drawer drawer-end">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            
           
            <div className="drawer-content flex flex-col min-h-screen">
                <Navbar />
                <div className="grow">
                    <Outlet />
                </div>
                <Footer />
            </div> 
            
            
            <div className="drawer-side z-50">
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                
              
                <DashboardSidebar />
                
            </div>
        </div>
    );
};

export default HomeLayout;