import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Invoices = () => {
    const { user } = useContext(AuthContext);
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        if (user?.email) {
            
            fetch(`https://bookcourier.vercel.app/payments?email=${user.email}`)
                .then(res => res.json())
                .then(data => setPayments(data));
        }
    }, [user]);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">My Invoices</h2>

            <div className="overflow-x-auto">
                <table className="table w-full shadow-lg bg-white">
                   
                    <thead className="bg-purple-600 text-white">
                        <tr>
                            <th></th>
                            <th>Payment ID</th>
                            <th>Book Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {payments.length === 0 && <tr><td colSpan="5" className="text-center p-4">No invoices found</td></tr>}
                        
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                
                               
                                <td className="font-mono text-green-600 font-bold">
                                    {payment.transactionId}
                                </td>
                                
                               
                                <td className="font-semibold text-black">{payment.bookTitle}</td>
                                
                               
                                <td className="text-orange-600 font-bold">{payment.price} Tk</td>
                                
                             
                                <td className='text-cyan-950'>{new Date(payment.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Invoices;