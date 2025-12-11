import React, { useEffect, useState } from 'react';


const AllBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="min-h-screen container mx-auto p-6">
            <div className="flex justify-between items-center mt-10 mb-8">
                <h1 className='text-4xl font-bold text-amber-400'>Books Collection</h1>
                
               
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {books.map(book => (
                   <div key={book._id} className='rounded-lg shadow-md p-3 border h-[300px] flex flex-col'>
                        <img src={book.coverImage} alt={book.title} className='h-36 w-full object-cover rounded-md mb-2'/>
                        <h2 className='text-base font-semibold leading-tight line-clamp-2'>{book.title}</h2>
                        <p className='text-xs text-gray-600'>{book.author}</p>
                        <p className='text-sm font-bold text-orange-400'>Price: {book.price} taka</p>
                        <p className='mt-auto text-xs border-t pt-2'>
                            Status: <span className={book.available ? "text-green-600" : "text-red-600"}>{book.available ? "Available" : "Unavailable"}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;