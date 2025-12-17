import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider'; // আপনার AuthProvider এর পাথ ঠিক আছে কিনা দেখবেন
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
    const { id } = useParams(); // URL থেকে Order ID নেওয়া হচ্ছে
    const { user } = useContext(AuthContext);
    const [order, setOrder] = useState(null);
    const navigate = useNavigate();

    // নির্দিষ্ট অর্ডার লোড করা
    useEffect(() => {
        fetch(`http://localhost:3000/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
            .catch(err => console.error(err));
    }, [id]);

    const handlePayment = (e) => {
        e.preventDefault();
        
        // ১. একটি ফেইক ট্রানজেকশন আইডি জেনারেট করছি
        const transactionId = "TXN" + Math.floor(Math.random() * 10000000);

        const paymentInfo = {
            transactionId: transactionId,
            userEmail: user?.email, // ইনভয়েস এর জন্য userEmail নামেই সেভ করছি
            orderId: id,
            price: order?.price,
            bookTitle: order?.bookTitle,
            date: new Date()
        };

        // ২. ব্যাকএন্ডে পেমেন্ট ইনফো পাঠানো
        fetch('http://localhost:3000/payments', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(paymentInfo)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                toast.success("Payment Successful!");
                
                // ৩. ২ সেকেন্ড পর অটোমেটিক Invoices পেজে নিয়ে যাবে
                setTimeout(() => {
                    navigate('/dashboard/invoices');
                }, 2000);
            }
        });
    };

    // ডাটা লোড না হওয়া পর্যন্ত লোডিং স্পিনার দেখাবে
    if (!order) return <div className="flex justify-center mt-20"><span className="loading loading-spinner text-primary loading-lg"></span></div>;

    return (
        <div className="flex justify-center items-center min-h-[70vh] bg-gray-50 p-4">
            <div className="card w-full max-w-md bg-white shadow-2xl rounded-xl overflow-hidden">
                
                {/* Header Section */}
                <div className="bg-green-600 p-6 text-center text-white">
                    <h2 className="text-3xl font-bold">Checkout</h2>
                    <p className="opacity-80">Complete your purchase safely</p>
                </div>

                <div className="p-8">
                    {/* Order Summary */}
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-gray-700">{order.bookTitle}</h3>
                        <p className="text-sm text-gray-500 mt-1">Order ID: <span className="font-mono bg-gray-200 px-2 rounded">{order._id.slice(-6)}</span></p>
                        <div className="divider my-4"></div>
                        <p className="text-4xl font-extrabold text-green-600">৳ {order.price}</p>
                        <p className="text-gray-400 text-sm">Total Payable Amount</p>
                    </div>

                    {/* Payment Form */}
                    <form onSubmit={handlePayment} className="space-y-4">
                        <div className="form-control">
                            <label className="label"><span className="label-text font-bold">Card Number (Demo)</span></label>
                            <input 
                                type="text" 
                                defaultValue="4242 4242 4242 4242" 
                                className="input input-bordered input-success w-full bg-gray-50 text-black tracking-widest" 
                                readOnly 
                            />
                        </div>

                        <div className="flex gap-4">
                            <div className="form-control w-1/2">
                                <label className="label"><span className="label-text font-bold">Expiry</span></label>
                                <input type="text" placeholder="MM/YY" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label"><span className="label-text font-bold">CVC</span></label>
                                <input type="text" placeholder="123" className="input input-bordered w-full" required />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success w-full text-white text-lg mt-6 shadow-lg hover:shadow-xl transition-all">
                            Confirm Payment
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Payment;