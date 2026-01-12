import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            setLoading(false);
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            toast.success('Thank you for contacting us! We will get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Contact Us
                    </h1>
                    <p className="text-xl text-base-content/80">
                        Have questions? We'd love to hear from you
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="card bg-linear-to-br from-primary/10 to-secondary/10 shadow-xl border border-primary/20">
                            <div className="card-body">
                                <h2 className="card-title text-2xl mb-4">Get in Touch</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">📍</div>
                                        <div>
                                            <h3 className="font-bold">Address</h3>
                                            <p className="text-sm text-base-content/70">
                                                123 Library Street, Book District<br />
                                                Dhaka, Bangladesh 1200
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">📞</div>
                                        <div>
                                            <h3 className="font-bold">Phone</h3>
                                            <p className="text-sm text-base-content/70">
                                                +880 1234-567890<br />
                                                +880 9876-543210
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">✉️</div>
                                        <div>
                                            <h3 className="font-bold">Email</h3>
                                            <p className="text-sm text-base-content/70">
                                                info@bookcourier.com<br />
                                                support@bookcourier.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">🕒</div>
                                        <div>
                                            <h3 className="font-bold">Business Hours</h3>
                                            <p className="text-sm text-base-content/70">
                                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                Saturday: 10:00 AM - 4:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-linear-to-br from-primary/10 to-secondary/10 shadow-xl border border-primary/20">
                            <div className="card-body">
                                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                        </svg>
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                            <path d="M18.244 2H21.5l-7.6 8.66L22 22h-5.77l-4.49-5.64L6.44 22H3.18l8.13-9.26L2 2h5.91l4.06 5.16L18.24 2zM17.18 20h1.45L8.02 4H6.48l10.7 16z"/>
                                        </svg>
                                    </a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-error">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card bg-linear-to-br from-primary/10 to-secondary/10 shadow-xl border border-primary/20">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Name *</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email *</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Subject</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What is this regarding?"
                                        className="input input-bordered"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Message *</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="textarea textarea-bordered h-32"
                                        placeholder="Tell us how we can help you..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="form-control mt-6">
                                    <button
                                        type="submit"
                                        className={`btn btn-primary ${loading ? 'loading' : ''}`}
                                        disabled={loading}
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Contact;
