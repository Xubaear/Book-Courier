
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const BookDetailsModal = ({ book, closeModal }) => {
  
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    const orderData = {
      bookId: book._id,
      bookTitle: book.title,
      price: book.price,

      customerName: user?.displayName,
      email: user?.email,

      phone: form.phone.value,
      address: form.address.value,

      status: "pending",
      paymentStatus: "unpaid",
      createdAt: new Date()
    };

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Placed Successfully!");
          closeModal();
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

        <h3 className="font-bold text-2xl mb-6 text-center">Order Information</h3>

        <form onSubmit={handlePlaceOrder} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-bold mb-1">Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold mb-1">Email</label>
            <input
              type="text"
              defaultValue={user?.email}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-bold mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              required
              placeholder="Enter your phone"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-bold mb-1">Address</label>
            <textarea
              name="address"
              required
              placeholder="Enter shipping address"
              className="w-full p-2 border rounded h-24"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookDetailsModal;
