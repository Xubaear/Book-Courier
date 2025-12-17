import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate ইম্পোর্ট করুন
import { AuthContext } from '../Provider/AuthProvider'; // পাথ চেক করুন
import useRole from '../hooks/useRole';

const DashboardSidebar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [role, isRoleLoading] = useRole();
    const navigate = useNavigate(); // হুক কল করুন

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("User logged out successfully");
                navigate('/login'); // লগআউট হওয়ার পর লগইন পেজে পাঠাবে
            })
            .catch(error => console.error("Logout error:", error));
    };

    if (isRoleLoading) {
        return <div className="p-10 flex justify-center"><span className="loading loading-spinner"></span></div>;
    }

    return (
        <div className="bg-base-200 min-h-full w-80 p-4 pt-10 text-base-content flex flex-col">
            {/* প্রোফাইল সেকশন */}
            <div className="flex flex-col items-center mb-6">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img referrerPolicy="no-referrer" src={user?.photoURL || "https://i.ibb.co/T10z274/user.png"} alt="User" />
                    </div>
                </div>
                <h2 className="text-xl font-bold mt-2">{user?.displayName || "User"}</h2>
                <p className="text-xs badge badge-secondary uppercase mt-1">{role || "guest"}</p>
                <p className="text-xs text-gray-500 mt-1">{user?.email}</p>
            </div>

            <div className="divider"></div>

            {/* মেনু আইটেমগুলো */}
            <ul className="menu space-y-2">
                <li><Link to="/dashboard/profile">My Profile</Link></li>

                {role === 'user' && (
                    <>
                        <li><Link to="/dashboard/my-orders">My Orders</Link></li>
                        <li><Link to="/dashboard/invoices">Invoices</Link></li>
                    </>
                )}

                {role === 'librarian' && (
                    <>
                        <li><Link to="/dashboard/add-book">Add A Book</Link></li>
                        <li><Link to="/dashboard/my-books">My Added Books</Link></li>
                        <li><Link to="/dashboard/orders">Manage Orders</Link></li>
                    </>
                )}

                {role === 'admin' && (
                    <>
                        <li><Link to="/dashboard/all-users">Manage Users</Link></li>
                        <li><Link to="/dashboard/manage-books">Manage All Books</Link></li>
                    </>
                )}
            </ul>

            {/* লগআউট বাটন */}
            <div className="mt-auto">
                <button 
                    onClick={handleLogOut} 
                    className="btn btn-error w-full text-white"
                >
                    Logout
                </button>
                
                <label 
                    htmlFor="dashboard-drawer" 
                    className="btn btn-outline btn-sm w-full mt-4"
                >
                    Close Menu
                </label>
            </div>
        </div>
    );
};

export default DashboardSidebar;