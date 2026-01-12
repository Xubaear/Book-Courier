import React from 'react';

const Features = () => {
    const features = [
        {
            icon: '📦',
            title: 'Premium Packaging',
            description: 'Waterproof bubble wrapping ensures your books arrive in perfect condition, safe from any transit damage.'
        },
        {
            icon: '⚡',
            title: 'Super Fast Delivery',
            description: 'Express delivery network ensures your books reach you within the shortest possible time across 64 districts.'
        },
        {
            icon: '💰',
            title: 'Low Cost & Tracking',
            description: 'Most affordable delivery rates with real-time parcel tracking until it reaches your doorstep.'
        },
        {
            icon: '📚',
            title: 'Vast Collection',
            description: 'Access thousands of books from hundreds of library partners across the country.'
        },
        {
            icon: '🔄',
            title: 'Easy Returns',
            description: 'Simple return process - schedule a pickup and we handle the rest for you.'
        },
        {
            icon: '🔒',
            title: 'Secure Platform',
            description: 'Your data and transactions are protected with industry-standard security measures.'
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-base-200">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose BookCourier?</h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Experience the future of library services with our innovative delivery platform
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                            <div className="card-body items-center text-center">
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="card-title text-xl mb-2">{feature.title}</h3>
                                <p className="text-base-content/70">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
