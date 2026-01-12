import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email address');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        setLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            toast.success('Successfully subscribed to our newsletter!');
            setEmail('');
            setLoading(false);
        }, 1000);
    };

    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-secondary">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Subscribe to our newsletter and get the latest updates on new books, promotions, and reading tips delivered to your inbox.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 input input-bordered input-lg text-base-content"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className={`btn btn-lg btn-accent text-white ${loading ? 'loading' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                    <p className="text-sm text-white/70 mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={3000} />
        </section>
    );
};

export default Newsletter;
