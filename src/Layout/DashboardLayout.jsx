import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../Pages/DashboardSidebar';
import Navbar from '../Components/Navbar';


const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="flex min-h-screen mt-20">
            

         
            <div className="w-80 fixed h-full z-10">
                <DashboardSidebar />
            </div>

           
            <div className="flex-1 ml-80 p-8 bg-gray-50 min-h-screen">
                <Outlet /> 
            </div>
        </div>
        </div>
    );
};

export default DashboardLayout;