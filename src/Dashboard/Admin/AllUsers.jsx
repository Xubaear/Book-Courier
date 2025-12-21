import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    
    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

   
    const handleMakeRole = (email, newRole) => {
        fetch('http://localhost:3000/users/role', {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email, role: newRole })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`User is now a ${newRole}`);
                   
                    const updatedUsers = users.map(user => 
                        user.email === email ? { ...user, role: newRole } : user
                    );
                    setUsers(updatedUsers);
                }
            });
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">All Users & Roles</h2>
            <div className="overflow-x-auto">
                <table className="table w-full shadow-lg">
                    <thead className="bg-neutral text-white">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Current Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td className="font-bold text-black">{user.name || 'N/A'}</td>
                                <td className='text-red-400'>{user.email}</td>
                                <td>
                                    <span className={`badge ${user.role === 'admin' ? 'badge-error text-white' : user.role === 'librarian' ? 'badge-warning' : 'badge-ghost'}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="space-x-2">
                                    {/* Make Librarian Button */}
                                    <button 
                                        onClick={() => handleMakeRole(user.email, 'librarian')}
                                        className="btn btn-xs btn-warning"
                                        disabled={user.role === 'librarian'}
                                    >
                                        Make Librarian
                                    </button>

                                    {/* Make Admin Button */}
                                    <button 
                                        onClick={() => handleMakeRole(user.email, 'admin')}
                                        className="btn btn-xs btn-error text-white"
                                        disabled={user.role === 'admin'}
                                    >
                                        Make Admin
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AllUsers;