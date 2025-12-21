import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    
    useEffect(() => {
        if (user?.email) {
           
            fetch(`https://bookcourier.vercel.app/orders/user?email=${user.email}`, {
                method: 'GET',
                credentials: 'include' 
            })
            .then(res => res.json())
            .then(data => setOrders(data));
        }
    }, [user]);

    
    const handleCancelOrder = (id) => {
        const proceed = window.confirm("Are you sure you want to cancel?");
        if (proceed) {
            
            fetch(`https://bookcourier.vercel.app/orders/cancel/${id}`, {
                method: 'PATCH',
                credentials: 'include'
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Order Cancelled");
                    
                   
                    const remaining = orders.map(order => {
                        if (order._id === id) {
                           
                            return { ...order, status: 'cancelled' }; 
                        }
                        return order;
                    });
                    setOrders(remaining);
                }
            });
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">My Orders</h2>
            
            <div className="overflow-x-auto">
                <table className="table w-full shadow-xl bg-base-100 rounded-lg">
                 
                    <thead className="bg-neutral text-white">
                        <tr>
                            <th>Book Title</th>
                            <th>Order Date</th>
                            <th>Status</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {orders.length === 0 && <tr><td colSpan="4" className="text-center p-4">No orders found</td></tr>}
                        
                        {orders.map((order) => (
                            <tr key={order._id} className="hover">
                                
                                {/* Book Title */}
                                <td className="font-bold">{order.bookTitle}</td>
                                
                                {/* Order Date */}
                                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                
                                {/* Status Badge */}
                                <td>
                                    <span className={`badge ${
                                        order.status === 'pending' ? 'badge-warning' : 
                                        order.status === 'cancelled' ? 'badge-error text-white' : 
                                        'badge-success text-white'
                                    }`}>
                                        {order.status}
                                    </span>
                                </td>

                                {/* Action Buttons Logic */}
                                <td className="flex gap-2 items-center">
   
    {order.status === 'cancelled' ? (
        <span className="text-red-500 font-bold bg-red-100 px-2 py-1 rounded">
            Cancelled
        </span>
    ) : (
        <>
           
            {order.paymentStatus === 'paid' ? (
                <span className="text-white font-semibold text-lg  bg-green-700 px-3 py-1 rounded">
                    Paid
                </span>
            ) : (
                
                <>
                    <button 
                        onClick={() => handleCancelOrder(order._id)}
                        className="btn btn-sm btn-error text-white"
                    >
                        Cancel
                    </button>

                    <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-sm btn-success text-white">
                            Pay Now
                        </button>
                    </Link>
                </>
            )}
        </>
    )}
</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;