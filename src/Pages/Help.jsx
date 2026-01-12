import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Help = () => {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Validation
        if (!contactForm.name || !contactForm.email || !contactForm.message) {
            toast.error('Please fill in all required fields');
            setLoading(false);
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            toast.success('Thank you for contacting us! Our support team will get back to you within 24 hours.');
            setContactForm({ name: '', email: '', subject: '', message: '' });
            setLoading(false);
        }, 1500);
    };

    const handleChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };

    const faqs = [
        {
            category: 'Getting Started',
            questions: [
                {
                    q: 'How do I create an account?',
                    a: 'Click on the "Register" button in the top right corner, fill in your details, and verify your email address. You can also sign up using Google or Facebook for faster registration.'
                },
                {
                    q: 'Is membership free?',
                    a: 'Yes, creating an account is completely free. You only pay for the books you order and delivery charges, which vary based on your location.'
                }
            ]
        },
        {
            category: 'Ordering & Delivery',
            questions: [
                {
                    q: 'How long does delivery take?',
                    a: 'Standard delivery typically takes 2-5 business days. Express delivery options are available in major cities for 1-2 day delivery. Delivery times are shown at checkout.'
                },
                {
                    q: 'What are the delivery charges?',
                    a: 'Delivery charges depend on your location and the number of books ordered. Prices start from 50 Tk and are clearly displayed before you confirm your order.'
                },
                {
                    q: 'Can I track my order?',
                    a: 'Yes, once your order is confirmed, you\'ll receive a tracking number via email. You can track your order status in your dashboard under "My Orders".'
                }
            ]
        },
        {
            category: 'Returns & Refunds',
            questions: [
                {
                    q: 'How do I return a book?',
                    a: 'Log into your account, go to "My Orders", select the book you want to return, and click "Schedule Return". Choose a convenient pickup date and time.'
                },
                {
                    q: 'What is the return policy?',
                    a: 'Books must be returned within 30 days of delivery in good condition. Late returns may incur additional charges. Damaged books cannot be returned.'
                },
                {
                    q: 'How long does a refund take?',
                    a: 'Refunds are processed within 5-7 business days after we receive and inspect the returned book. The amount will be credited to your original payment method.'
                }
            ]
        },
        {
            category: 'Account & Payment',
            questions: [
                {
                    q: 'What payment methods do you accept?',
                    a: 'We accept cash on delivery (COD), bKash, Nagad, Rocket, and major credit/debit cards. Payment options are shown at checkout.'
                },
                {
                    q: 'How do I update my profile information?',
                    a: 'Go to your Dashboard, click on "My Profile", and update your information. Click "Update Information" to save your changes.'
                },
                {
                    q: 'I forgot my password. How do I reset it?',
                    a: 'Click on "Login", then "Forgot Password", and enter your email address. You\'ll receive a password reset link via email.'
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Help & Support
                    </h1>
                    <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                        Find answers to your questions or contact our support team
                    </p>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="card bg-linear-to-br from-primary/10 to-secondary/10 shadow-xl border border-primary/20  cursor-pointer transition-all hover:-translate-y-2">
                        <div className="card-body items-center text-center">
                            <div className="text-4xl mb-4">📞</div>
                            <h3 className="card-title">Phone Support</h3>
                            <p className="text-base-content/70">Call us anytime</p>
                            <p className="font-semibold text-primary">+880 1234-567890</p>
                            <p className="text-sm text-base-content/60">Mon-Fri: 9AM-6PM</p>
                        </div>
                    </div>
                    <div className="card bg-linear-to-br from-primary/10 to-secondary/10 shadow-xl border border-primary/20  cursor-pointer transition-all hover:-translate-y-2">
                        <div className="card-body items-center text-center">
                            <div className="text-4xl mb-4">✉️</div>
                            <h3 className="card-title">Email Support</h3>
                            <p className="text-base-content/70">Send us an email</p>
                            <p className="font-semibold text-primary">support@bookcourier.com</p>
                            <p className="text-sm text-base-content/60">Response within 24hrs</p>
                        </div>
                    </div>
                    <div className="card bg-linear-to-br from-primary/10 to-secondary/10 shadow-xl border border-primary/20  cursor-pointer transition-all hover:-translate-y-2">
                        <div className="card-body items-center text-center">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="card-title">Live Chat</h3>
                            <p className="text-base-content/70">Chat with us</p>
                            <button className="btn btn-primary btn-sm mt-2">Start Chat</button>
                            <p className="text-sm text-base-content/60">Available 24/7</p>
                        </div>
                    </div>
                </div>

                {/* FAQs by Category */}
                <div className="space-y-8 mb-12">
                    {faqs.map((category, catIndex) => (
                        <div key={catIndex} className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl mb-6">{category.category}</h2>
                                <div className="space-y-4">
                                    {category.questions.map((faq, qIndex) => (
                                        <div key={qIndex} className="collapse collapse-plus bg-base-200">
                                            <input type="radio" name={`category-${catIndex}`} />
                                            <div className="collapse-title text-lg font-medium">
                                                {faq.q}
                                            </div>
                                            <div className="collapse-content">
                                                <p className="text-base-content/70">{faq.a}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="card bg-linear-to-br from-primary/10 to-secondary/10 shadow-xl border border-primary/20">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">Still Need Help?</h2>
                        <p className="text-base-content/70 mb-6">
                            Can't find what you're looking for? Fill out the form below and our support team will get back to you as soon as possible.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-row-2 gap-4">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text font-semibold ">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={contactForm.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className="input input-bordered "
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email </span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={contactForm.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Subject</span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={contactForm.subject}
                                    onChange={handleChange}
                                    placeholder="What is this regarding?"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Message </span>
                                </label>
                                <textarea
                                    name="message"
                                    value={contactForm.message}
                                    onChange={handleChange}
                                    className="textarea textarea-bordered h-32"
                                    placeholder="Describe your issue or question..."
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
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Help;
