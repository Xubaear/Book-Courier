import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    // ১. ইউজারের অর্ডার লোড করা
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/orders/user?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user]);

    // ২. অর্ডার ক্যানসেল করার ফাংশন
    const handleCancelOrder = (id) => {
        const proceed = window.confirm("Are you sure you want to cancel?");
        if (proceed) {
            fetch(`http://localhost:3000/orders/cancel/${id}`, {
                method: 'PATCH'
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Order Cancelled");
                    
                    // UI আপডেট (রিফ্রেশ ছাড়া বাটন গায়েব করার জন্য)
                    const remaining = orders.map(order => {
                        if (order._id === id) {
                            // স্ট্যাটাস চেঞ্জ করে 'cancelled' করে দিচ্ছি
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
                    {/* টেবিল হেডার */}
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
    {/* ১. যদি অর্ডার ক্যানসেল করা থাকে */}
    {order.status === 'cancelled' ? (
        <span className="text-red-500 font-bold bg-red-100 px-2 py-1 rounded">
            Cancelled
        </span>
    ) : (
        <>
            {/* ২. যদি পেমেন্ট করা হয়ে গিয়ে থাকে (Paid) */}
            {order.paymentStatus === 'paid' ? (
                <span className="text-white font-semibold text-lg  bg-green-700 px-3 py-1 rounded">
                    Paid
                </span>
            ) : (
                /* ৩. যদি পেমেন্ট না করা থাকে এবং স্ট্যাটাস Pending থাকে (Action Buttons) */
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