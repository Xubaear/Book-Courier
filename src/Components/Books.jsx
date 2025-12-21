import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BookDetailsModal from "../Components/BookDetailsModal";
import { AuthContext } from "../Provider/AuthProvider"; 

const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    
    fetch("http://localhost:3000/latest-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  
  const handleBookClick = (book) => {
    if (user) {
      
      setSelectedBook(book);
    } else {
      
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
            onClick={() => handleBookClick(book)}
            className="rounded-lg shadow-md p-3 border cursor-pointer hover:scale-105 hover:shadow-xl transition "
          >
            {/* Image Section with Status Badge */}
            <figure className="relative">
                <img
                src={book.coverImage}
                alt={book.title}
               
                className={`h-36 w-full object-cover rounded-md mb-2 ${!book.available ? 'grayscale opacity-60' : ''}`}
                />
                
                
                {!book.available && (
                    <div className="absolute top-2 right-2 badge badge-error text-white text-xs font-bold">
                        Out of Stock
                    </div>
                )}
            </figure>

            <h2 className="text-base font-semibold line-clamp-2">{book.title}</h2>
            <p className="text-xs text-gray-600">{book.author}</p>
            
            {/* Price and Availability Status */}
            <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-bold text-orange-400">
                    Price: {book.price} taka
                </p>

                
                <span className={`text-[10px] font-bold px-2 py-1 rounded ${book.available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                    {book.available ? 'In Stock' : 'Unavailable'}
                </span>
            </div>

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