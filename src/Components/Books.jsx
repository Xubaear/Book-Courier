import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BookDetailsModal from "../Components/BookDetailsModal";
import { AuthContext } from "../Provider/AuthProvider"; // পাথ চেক করুন

const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  
  const { user } = useContext(AuthContext); // ইউজার চেক করার জন্য
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // ফিক্স: ব্যাকএন্ডের রাউটের সাথে মিল রেখে URL ঠিক করা হলো
    fetch("http://localhost:3000/latest-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // বইয়ে ক্লিক করলে এই ফাংশনটি কল হবে
  const handleBookClick = (book) => {
    if (user) {
      // ইউজার লগইন থাকলে মোডাল ওপেন হবে
      setSelectedBook(book);
    } else {
      // লগইন না থাকলে লগইন পেজে পাঠিয়ে দেবে
      // state দিয়ে লোকেশন মনে রাখা হচ্ছে, যাতে লগইন শেষে আবার এখানে ফিরে আসে
      navigate('/login', { state: { from: location } });
    }
  };

  return (
    <div>
      <h1 className="text-6xl font-bold text-center mt-20 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-pink-900">
        Latest Books
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 m-10">
        {books.map((book) => (
          <div
            key={book._id}
            onClick={() => handleBookClick(book)} // নতুন ফাংশন কল
            className="rounded-lg shadow-md p-3 border cursor-pointer hover:scale-105 hover:shadow-xl transition"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="h-36 w-full object-cover rounded-md mb-2"
            />
            <h2 className="text-base font-semibold line-clamp-2">{book.title}</h2>
            <p className="text-xs text-gray-600">{book.author}</p>
            <p className="text-sm font-bold text-orange-400">
              Price: {book.price} taka
            </p>
          </div>
        ))}
      </div>

      {selectedBook && (
        <BookDetailsModal
          book={selectedBook}
          closeModal={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};

export default Books;