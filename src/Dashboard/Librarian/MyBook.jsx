import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const MyBooks = () => {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);

 
    useEffect(() => {
        if (user?.email) {
            fetch(`https://bookcourier.vercel.app/books/librarian?email=${user.email}`)
                .then(res => res.json())
                .then(data => setBooks(data));
        }
    }, [user]);

   
    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this book?");
        if (confirm) {
            fetch(`https://bookcourier.vercel.app/books/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Book Deleted");
                    const remaining = books.filter(book => book._id !== id);
                    setBooks(remaining);
                }
            });
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">My Added Books</h2>

            <div className="overflow-x-auto">
                <table className="table w-full shadow-lg bg-base-100">
                    <thead className="bg-neutral text-white">
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.length === 0 && <tr><td colSpan="5" className="text-center p-4">No books added yet</td></tr>}
                        
                        {books.map((book) => (
                            <tr key={book._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={book.coverImage} alt="Book" />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold">{book.title}</td>
                                <td>{book.author}</td>
                                <td className="text-orange-600 font-bold">{book.price} Tk</td>
                                <td>
                                    <button onClick={() => handleDelete(book._id)} className="btn btn-sm btn-error text-white">Delete</button>
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

export default MyBooks;