import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const AddBook = () => {
    const { user } = useContext(AuthContext);

    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;

        const bookData = {
            title: form.title.value,
            author: form.author.value,
            price: form.price.value,
            coverImage: form.coverImage.value,
            description: form.description.value,
            status: "published", 
            librarianEmail: user?.email, 
            createdAt: new Date()
        };

        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                toast.success("Book Added Successfully!");
                form.reset();
            }
        });
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">Add A New Book</h2>
            
            <div className="card bg-base-100 shadow-xl p-8 max-w-2xl mx-auto border">
                <form onSubmit={handleAddBook} className="space-y-4">
                    
                    {/* Title & Author */}
                    <div className="flex gap-4">
                        <div className="form-control w-1/2">
                            <label className="label"><span className="label-text font-bold">Book Title</span></label>
                            <input type="text" name="title" placeholder="Enter book title" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label"><span className="label-text font-bold">Author Name</span></label>
                            <input type="text" name="author" placeholder="Enter author name" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* Price & Image URL */}
                    <div className="flex gap-4">
                        <div className="form-control w-1/2">
                            <label className="label"><span className="label-text font-bold">Price (Tk)</span></label>
                            <input type="number" name="price" placeholder="Example: 250" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label"><span className="label-text font-bold">Cover Image URL</span></label>
                            <input type="url" name="coverImage" placeholder="https://example.com/image.jpg" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="form-control ml-100">
                        <label className="label "><span className="label-text font-bold ">Description </span></label>
                        <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Book description..." required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-full text-white mt-4">Add Book</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddBook;