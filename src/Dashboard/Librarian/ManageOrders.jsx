import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const ManageOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

   
    useEffect(() => {
       
        fetch(`https://bookcourier.vercel.app/orders/librarian?email=${user?.email}`) 
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user]);

  
    const handleStatusChange = (id, newStatus) => {
        fetch(`https://bookcourier.vercel.app/orders/status/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: newStatus })
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success(`Order Status Changed to ${newStatus}`);
                
                const updatedOrders = orders.map(order => 
                    order._id === id ? { ...order, status: newStatus } : order
                );
                setOrders(updatedOrders);
            }
        });
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">Manage Customer Orders</h2>

            <div className="overflow-x-auto">
                <table className="table w-full shadow-lg bg-base-100">
                    <thead className="bg-neutral text-white">
                        <tr>
                            <th>Book Title</th>
                            <th>Customer Email</th>
                            <th>Current Status</th>
                            <th>Payment</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length === 0 && <tr><td colSpan="5" className="text-center p-4">No orders found</td></tr>}
                        
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td className="font-bold">{order.bookTitle}</td>
                                <td>{order.userEmail || order.email}</td>
                                
                                <td>
                                    <span className={`badge ${
                                        order.status === 'pending' ? 'badge-warning' : 
                                        order.status === 'shipped' ? 'badge-info text-white' : 
                                        order.status === 'delivered' ? 'badge-success text-white' : 
                                        'badge-ghost'
                                    }`}>
                                        {order.status}
                                    </span>
                                </td>

                                <td className={order.paymentStatus === 'paid' ? 'text-green-600 font-bold' : 'text-red-500'}>
                                    {order.paymentStatus}
                                </td>

                                <td>
                                    <select 
                                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                        defaultValue={order.status}
                                        className="select select-bordered select-xs w-full max-w-xs"
                                        disabled={order.status === 'cancelled'}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="delivered">Delivered</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
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

export default ManageOrders;