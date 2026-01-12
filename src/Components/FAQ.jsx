import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How does BookCourier work?',
            answer: 'BookCourier allows you to browse books from partner libraries, place an order online, and have them delivered to your doorstep. When you\'re done reading, you can schedule a pickup for returns.'
        },
        {
            question: 'What is the delivery time?',
            answer: 'Delivery time varies by location. Typically, orders are delivered within 2-5 business days. Express delivery options are available for faster service in major cities.'
        },
        {
            question: 'How much does delivery cost?',
            answer: 'Delivery costs depend on your location and the number of books ordered. Prices are competitive and clearly displayed at checkout. We also offer membership plans with free delivery options.'
        },
        {
            question: 'Can I return books early?',
            answer: 'Yes, absolutely! You can schedule a return pickup anytime through your dashboard. Simply log in, select the books you want to return, and choose a convenient pickup time.'
        },
        {
            question: 'What if a book is damaged during delivery?',
            answer: 'All books are packaged securely, but if you receive a damaged book, please contact our support team within 24 hours. We\'ll arrange a replacement or refund immediately.'
        },
        {
            question: 'Do you deliver to all areas?',
            answer: 'We currently deliver to all 64 districts of Bangladesh. Some remote areas may have slightly longer delivery times, but we strive to reach every corner of the country.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-pink-900">Frequently Asked Questions</h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Find answers to common questions about our service
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="collapse collapse-plus bg-base-100 shadow-lg">
                            <input
                                type="radio"
                                name="faq-accordion"
                                checked={openIndex === index}
                                onChange={() => toggleFAQ(index)}
                            />
                            <div className="collapse-title text-xl font-medium">
                                {faq.question}
                            </div>
                            <div className="collapse-content">
                                <p className="text-base-content/70">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
