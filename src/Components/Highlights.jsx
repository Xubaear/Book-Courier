import React from 'react';

const Highlights = () => {
    const highlights = [
        {
            number: '10K+',
            label: 'Books Delivered',
            description: 'Successfully delivered books to thousands of happy readers'
        },
        {
            number: '5K+',
            label: 'Active Members',
            description: 'Growing community of book lovers across the country'
        },
        {
            number: '200+',
            label: 'Library Partners',
            description: 'Trusted partnerships with libraries nationwide'
        },
        {
            number: '64',
            label: 'Coverage Districts',
            description: 'Service available in all districts of Bangladesh'
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-base-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-pink-900">Our Impact</h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Numbers that speak for our commitment to serving readers
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="card bg-linear-to-br from-primary/10 to-secondary/10 shadow-xl border border-primary/20">
                            <div className="card-body items-center text-center">
                                <div className="stat-value text-4xl md:text-5xl font-bold text-primary mb-2">
                                    {highlight.number}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{highlight.label}</h3>
                                <p className="text-sm text-base-content/70">{highlight.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
