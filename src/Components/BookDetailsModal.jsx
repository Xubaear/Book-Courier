import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetailsModal = ({ book, closeModal }) => {

  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    const orderData = {
      bookId: book._id,
      bookTitle: book.title,
      price: book.price,
      
      
      librarianEmail: book.librarianEmail, 

      customerName: user?.displayName,
      email: user?.email,
      phone: form.phone.value,
      address: form.address.value,
      status: "pending",
      paymentStatus: "unpaid",
      createdAt: new Date()
    };

    fetch("https://bookcourier.vercel.app/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
        
          toast.success("Order Placed Successfully!");
          
         
          setTimeout(() => {
            closeModal();
          }, 2000); 
        }
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-700 p-8 rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>

        <h3 className="font-bold text-2xl mb-6 text-center text-white">Order Information</h3>

        <form onSubmit={handlePlaceOrder} className="space-y-4">

        {/* Name  */}
          <div>
            <label className="block text-sm font-bold mb-1 text-white">Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="w-full p-2 border rounded text-black bg-gray-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold mb-1 text-white">Email</label>
            <input
              type="text"
              defaultValue={user?.email}
              readOnly
              className="w-full p-2 border rounded text-black bg-gray-100"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-bold mb-1 text-white">Phone Number</label>
            <input
              type="text"
              name="phone"
              required
              placeholder="Enter your phone"
              className="w-full p-2 border rounded text-black"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-bold mb-1 text-white">Address</label>
            <textarea
              name="address"
              required
              placeholder="Enter shipping address"
              className="w-full p-2 border rounded h-24 text-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </form>

        <ToastContainer position="top-center" autoClose={1500} />
      </div>
    </div>
  );
};

export default BookDetailsModal;