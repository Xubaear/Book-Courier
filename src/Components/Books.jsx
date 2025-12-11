import React, { useEffect, useState } from "react";
import BookDetailsModal from "../Components/BookDetailsModal";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/books/latest")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1 className="text-6xl font-bold text-center mt-20 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-pink-900">
        Latest Books
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 m-10">
        {books.map((book) => (
          <div
            key={book._id}
            onClick={() => setSelectedBook(book)}
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
