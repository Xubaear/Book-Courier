import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);

    
    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    
    const handleToggleStatus = (id, currentStatus) => {
        const newStatus = !currentStatus;
        fetch(`http://localhost:3000/books/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ available: newStatus })
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success(newStatus ? 'Book Published' : 'Book Unpublished');
                
                const updatedBooks = books.map(book => 
                    book._id === id ? { ...book, available: newStatus } : book
                );
                setBooks(updatedBooks);
            }
        });
    };

   
    const handleDelete = (id) => {
        if(!confirm("Are you sure? This will delete all orders related to this book!")) return;

        fetch(`http://localhost:3000/books/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                toast.error('Book and Related Orders Deleted');
                const remainingBooks = books.filter(book => book._id !== id);
                setBooks(remainingBooks);
            }
        });
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">Manage All Books</h2>
            <div className="overflow-x-auto">
                <table className="table w-full shadow-lg">
                    <thead className="bg-neutral text-white">
                        <tr>
                            <th>Book</th>
                            <th>Added By (Librarian)</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={book.coverImage} alt="Book" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-black">{book.title}</div>
                                            <div className="text-sm opacity-50 text-black">{book.price} taka</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-red-500'>{book.librarianEmail || 'Unknown'}</td>
                                <td>
                                    <span className={`badge ${book.available ? 'badge-success text-white' : 'badge-error text-white'}`}>
                                        {book.available ? 'Published' : 'Unpublished'}
                                    </span>
                                </td>
                                <td className="space-x-2">
                                    <button 
                                        onClick={() => handleToggleStatus(book._id, book.available)}
                                        className="btn btn-xs btn-info text-white"
                                    >
                                        {book.available ? 'Unpublish' : 'Publish'}
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(book._id)}
                                        className="btn btn-xs btn-error text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ManageBooks;