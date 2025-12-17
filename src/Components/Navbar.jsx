import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider'; // পাথ চেক করুন

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(error => console.log(error));
    }

    const links = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/all-books'>All Books</Link></li>
            
            
            {user && (
                <li>
                    <label htmlFor="dashboard-drawer" className="cursor-pointer font-semibold">
                        Dashboard
                    </label>
                </li>
            )}
        </>
    )

    return (
        <div className="navbar bg-base-100 shadow-sm mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to='/'>BookCourier</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            
            {/* লগইন/লগআউট বাটন লজিক */}
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center gap-2">
                        {/* ছোট করে ইউজারের ছবি দেখাতে পারেন */}
                        <div className="avatar w-8 h-8">
                            <img referrerPolicy="no-referrer" className="rounded-full" src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} alt="" />
                        </div>
                        <button onClick={handleLogOut} className="btn text-white">Logout</button>
                    </div>
                ) : (
                    <Link to='/login' className="btn">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;