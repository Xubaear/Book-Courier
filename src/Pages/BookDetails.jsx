import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedBooks, setRelatedBooks] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        setLoading(true);
        // Fetch all books and find the one matching the ID
        fetch('https://bookcourier.vercel.app/books')
            .then(res => res.json())
            .then(books => {
                const foundBook = books.find(b => b._id === id);
                if (foundBook) {
                    setBook(foundBook);
                    
                    // Fetch related books by category
                    if (foundBook.category) {
                        const related = books
                            .filter(b => b.category === foundBook.category && b._id !== id)
                            .slice(0, 4);
                        setRelatedBooks(related);
                    } else {
                        // If no category, show other books
                        const related = books.filter(b => b._id !== id).slice(0, 4);
                        setRelatedBooks(related);
                    }
                } else {
                    toast.error('Book not found');
                }
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                toast.error('Failed to load book details');
            });
    }, [id]);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        if (!user) {
            toast.error('Please login to place an order');
            navigate('/login');
            return;
        }

        const form = e.target;
        const orderData = {
            bookId: book._id,
            bookTitle: book.title,
            price: book.price,
            librarianEmail: book.librarianEmail,
            customerName: user?.displayName,
            email: user?.email,
            phone: form.phone.value,
            address: form.address.value,
            status: "pending",
            paymentStatus: "unpaid",
            createdAt: new Date()
        };

        fetch("https://bookcourier.vercel.app/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orderData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Order Placed Successfully!");
                    form.reset();
                    setTimeout(() => {
                        navigate('/dashboard/my-orders');
                    }, 2000);
                }
            })
            .catch(() => toast.error('Failed to place order'));
    };

   
    const bookImages = book?.images || [book?.coverImage, book?.coverImage, book?.coverImage].filter(Boolean);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-32">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!book) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center pt-32">
                <h2 className="text-2xl font-bold mb-4">Book not found</h2>
                <Link to="/all-books" className="btn btn-primary">Browse Books</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                {/* Breadcrumb */}
                <div className="text-sm breadcrumbs mb-6">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/all-books">All Books</Link></li>
                        <li>{book.title}</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Image Gallery */}
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="h-96 lg:h-[500px]">
                                <img
                                    src={bookImages[selectedImageIndex] || book.coverImage}
                                    alt={book.title}
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            {bookImages.length > 1 && (
                                <div className="card-body p-4">
                                    <div className="flex gap-2 overflow-x-auto">
                                        {bookImages.map((img, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedImageIndex(index)}
                                                className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                                                    selectedImageIndex === index ? 'border-primary' : 'border-base-300'
                                                }`}
                                            >
                                                <img src={img} alt={`${book.title} view ${index + 1}`} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Book Information */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{book.title}</h1>
                        <p className="text-xl text-base-content/70 mb-4">By {book.author}</p>
                        
                        {book.category && (
                            <span className="badge badge-primary badge-lg mb-4">{book.category}</span>
                        )}

                        <div className="divider"></div>

                        {/* Key Information */}
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">Price:</span>
                                <span className="text-2xl font-bold text-primary">{book.price} Tk</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">Availability:</span>
                                <span className={`badge badge-lg ${book.available ? 'badge-success' : 'badge-error'}`}>
                                    {book.available ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                            {book.isbn && (
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold">ISBN:</span>
                                    <span className="text-base-content/70">{book.isbn}</span>
                                </div>
                            )}
                            {book.publisher && (
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold">Publisher:</span>
                                    <span className="text-base-content/70">{book.publisher}</span>
                                </div>
                            )}
                            {book.publicationDate && (
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold">Published:</span>
                                    <span className="text-base-content/70">{new Date(book.publicationDate).getFullYear()}</span>
                                </div>
                            )}
                        </div>

                        <div className="divider"></div>

                        {/* Order Form */}
                        {book.available ? (
                            <form onSubmit={handlePlaceOrder} className="space-y-4">
                                <h3 className="text-xl font-bold mb-4">Place Order</h3>
                                {user ? (
                                    <>
                                    <label className="label">
                                                <span className="label-text font-semibold">Phone Number</span>
                                            </label>
                                        <div className="form-control ">
                                            
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                className="input input-bordered"
                                                required
                                            />
                                        </div>
                                        <label className="label">
                                                <span className="label-text font-semibold">Shipping Address</span>
                                            </label>
                                        <div className="form-control">
                                            
                                            <textarea
                                                name="address"
                                                placeholder="Enter your delivery address"
                                                className="textarea textarea-bordered h-10"
                                                required
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg w-full">
                                            Place Order
                                        </button>
                                    </>
                                ) : (
                                    <div className="alert alert-info">
                                        <span>Please login to place an order</span>
                                        <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
                                    </div>
                                )}
                            </form>
                        ) : (
                            <div className="alert alert-error">
                                <span>This book is currently unavailable</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Description Section */}
                <div className="card bg-base-100 shadow-xl mb-12">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">Description / Overview</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            {book.description || `"${book.title}" by ${book.author} is a captivating read that explores ${book.category ? `themes related to ${book.category}` : 'various themes'}. This book offers readers an engaging narrative and insightful perspectives. Whether you're looking for entertainment, knowledge, or inspiration, this book delivers a memorable reading experience.`}
                        </p>
                    </div>
                </div>

                {/* Specifications Section */}
                <div className="card bg-base-100 shadow-xl mb-12">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">Key Information / Specifications</h2>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <tbody>
                                    <tr>
                                        <td className="font-semibold">Title</td>
                                        <td>{book.title}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Author</td>
                                        <td>{book.author}</td>
                                    </tr>
                                    {book.category && (
                                        <tr>
                                            <td className="font-semibold">Category</td>
                                            <td>{book.category}</td>
                                        </tr>
                                    )}
                                    {book.isbn && (
                                        <tr>
                                            <td className="font-semibold">ISBN</td>
                                            <td>{book.isbn}</td>
                                        </tr>
                                    )}
                                    {book.publisher && (
                                        <tr>
                                            <td className="font-semibold">Publisher</td>
                                            <td>{book.publisher}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td className="font-semibold">Price</td>
                                        <td>{book.price} Tk</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Status</td>
                                        <td>
                                            <span className={`badge ${book.available ? 'badge-success' : 'badge-error'}`}>
                                                {book.available ? 'Available' : 'Unavailable'}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default BookDetails;
