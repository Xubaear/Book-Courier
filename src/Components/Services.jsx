import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Book Borrowing',
            description: 'Browse and borrow from thousands of books available in our partner libraries.',
            icon: '📖'
        },
        {
            title: 'Home Delivery',
            description: 'Get books delivered directly to your address with fast and secure shipping.',
            icon: '🚚'
        },
        {
            title: 'Book Returns',
            description: 'Schedule a pickup for book returns. We make the process hassle-free.',
            icon: '📬'
        },
        {
            title: 'Book Tracking',
            description: 'Track your orders in real-time from dispatch to delivery.',
            icon: '📍'
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-base-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Comprehensive library services delivered to your doorstep
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="card bg-base-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                            <div className="card-body items-center text-center">
                                <div className="text-6xl mb-4">{service.icon}</div>
                                <h3 className="card-title text-lg mb-2">{service.title}</h3>
                                <p className="text-sm text-base-content/70">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
