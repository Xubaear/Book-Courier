import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider'; 

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

   
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    

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
                    
                    <Link to="/dashboard/profile" className="font-semibold">
                        Dashboard
                    </Link>
                </li>
            )}
        </>
    )

    return (
        <div className="navbar bg-base-100 shadow-sm mb-10 fixed z-10 top-0 w-full px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl font-bold text-primary" to='/'>BookCourier</Link>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            
            <div className="navbar-end gap-3">
                
               
                <label className="swap swap-rotate">
                   
                    <input 
                        type="checkbox" 
                        onChange={handleToggle} 
                        checked={theme === 'dark' ? true : false}
                    />
                    
                    {/* sun icon */}
                    <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,5.64,7.05Zm13.5,6.36a1,1,0,0,0-1.41,0l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,19.14,13.41ZM17,9a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V8A1,1,0,0,0,17,9Zm0,10a1,1,0,0,0,1,1h3a1,1,0,0,0,0-2H18A1,1,0,0,0,17,19ZM12,22a1,1,0,0,0,1-1V18a1,1,0,0,0-2,0v3A1,1,0,0,0,12,22Zm5.66-1.41a1,1,0,0,0,.71,0l.71-.71a1,1,0,0,0,0-1.41l-.71-.71a1,1,0,0,0-.71,0l-.71.71a1,1,0,0,0,0,1.41ZM12,7A5,5,0,1,0,17,12,5,5,0,0,0,12,7Z"/></svg>
                    
                    {/* moon icon  */}
                    <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                </label>
                
                {user ? (
                    <div className="flex items-center gap-2">
                        <div className="avatar w-10 h-10 border border-primary rounded-full">
                            <img referrerPolicy="no-referrer" className="rounded-full" src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"} alt="" />
                        </div>
                        <button onClick={handleLogOut} className="btn btn-neutral btn-sm text-white">Logout</button>
                    </div>
                ) : (
                    <Link to='/login' className="btn btn-primary btn-sm text-white">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;