import React, { useEffect, useState } from "react";
import BookDetailsModal from "../Components/BookDetailsModal";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);


  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

 
  let displayedBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  if (sortOrder === "asc") {
    displayedBooks.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sortOrder === "desc") {
    displayedBooks.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }

  return (
    <div className="min-h-screen container mx-auto p-6 mt-30">
      <h1 className="text-4xl font-bold text-amber-400 mb-8 text-center md:text-left">Books Collection</h1>

     
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4  p-4 rounded-lg shadow-sm">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by book name..."
          className="input input-bordered w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Sort Select */}
        <select
          className="select select-bordered w-full md:w-1/4"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort By: Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>


      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedBooks.length === 0 ? <p className="col-span-full text-center text-gray-500">No books found matching your criteria.</p> : ''}
        
        
        {displayedBooks.map((book) => (
          <div
            key={book._id}
            onClick={() => setSelectedBook(book)}
            className="rounded-lg shadow-md p-3 border cursor-pointer hover:shadow-xl hover:scale-105 transition "
          >
            {/* Image */}
            <figure className="relative">
                <img
                src={book.coverImage}
                alt={book.title}
                className={`h-36 w-full object-cover rounded-md mb-2 ${!book.available ? 'grayscale opacity-50' : ''}`} 
                />
                
                {/* Status Badge on Image */}
                {!book.available && (
                    <div className="absolute top-2 right-2 badge badge-error text-white text-xs">
                        Out of Stock
                    </div>
                )}
            </figure>

            <h2 className="text-base font-semibold line-clamp-2">{book.title}</h2>
            <p className="text-xs text-gray-600">{book.author}</p>
            
            <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-bold text-orange-400">
                    Price: {book.price} taka
                </p>

                {/* Availability Status Text */}
                <span className={`text-xs font-bold px-2 py-1 rounded ${book.available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
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

export default AllBooks;