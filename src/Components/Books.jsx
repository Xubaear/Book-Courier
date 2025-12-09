import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1 className='text-6xl font-bold flex justify-center items-center mt-20 bg-linear-to-r from-blue-600 to-pink-900 bg-clip-text text-transparent'>
                Latest Books
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-5 gap-4 p-6 m-10'>
    {books.map(book => (
        <div 
            key={book._id} 
            className='rounded-lg shadow-md p-3 border h-[280px] flex flex-col'>
            <img 
                src={book.coverImage}
                alt={book.title}
                className='h-36 object-cover rounded-md mb-2'
            />

            <h2 className='text-base font-semibold leading-tight'>{book.title}</h2>
            <p className='text-xs text-gray-600'>{book.author}</p>
            <p className='text-[11px] text-gray-500'>{book.genre}</p>

            <p className='mt-auto text-xs'>
                Status: 
                <span
                    className={`ml-1 font-semibold ${
                        book.available ? "text-green-600" : "text-red-600"
                    }`}
                >
                    {book.available ? "Available" : "Unavailable"}
                </span>
            </p>
        </div>
    ))}
</div>

        </div>
    );
};

export default Books;
