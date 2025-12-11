import React, { useEffect, useState } from "react";
import BookDetailsModal from "../Components/BookDetailsModal";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="min-h-screen container mx-auto p-6">
      <h1 className="text-4xl font-bold text-amber-400 mb-8">Books Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            onClick={() => setSelectedBook(book)}
            className="rounded-lg shadow-md p-3 border cursor-pointer hover:shadow-xl hover:scale-105 transition"
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

export default AllBooks;
