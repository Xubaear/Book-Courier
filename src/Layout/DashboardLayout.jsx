// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import DashboardSidebar from '../Pages/DashboardSidebar';
// import Navbar from '../Components/Navbar';


// const DashboardLayout = () => {
//     return (
//         <div>
//             <Navbar></Navbar>

//             <div className="flex min-h-screen mt-20">
            

         
//             <div className="w-80 fixed h-full z-10">
//                 <DashboardSidebar />
//             </div>

           
//             <div className="flex-1 ml-80 p-8 bg-gray-50 min-h-screen">
//                 <Outlet /> 
//             </div>
//         </div>
//         </div>
//     );
// };

// export default DashboardLayout;


import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../Pages/DashboardSidebar';
import Navbar from '../Components/Navbar';

const DashboardLayout = () => {
    return (
        <div>
          
            <Navbar></Navbar>

            <div className="drawer lg:drawer-open mt-20">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-content flex flex-col p-8 bg-gray-50 min-h-screen">
                    
                   
                    <label htmlFor="my-drawer-2" className="btn btn-primary w-fit drawer-button lg:hidden mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    
                    </label>

                    <Outlet /> 
                </div> 
                
                <div className="drawer-side z-50"> 
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                    
                    <DashboardSidebar />
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;