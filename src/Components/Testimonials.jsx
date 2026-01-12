import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Ahmed Rahman',
            role: 'Student, Dhaka University',
           
            text: 'BookCourier has made my research so much easier! I can access any book I need without leaving my dorm. The delivery is always on time and books arrive in perfect condition.',
            rating: 5
        },
        {
            name: 'Fatima Khan',
            role: 'Teacher, Chittagong',
            
            text: 'As an educator, I need access to various educational resources. BookCourier provides exactly that with their extensive collection and reliable service. Highly recommended!',
            rating: 5
        },
        {
            name: 'Mohammad Ali',
            role: 'Business Professional',
            
            text: 'The convenience of having books delivered to my home is unmatched. Great service, reasonable prices, and excellent customer support. This is the future of libraries!',
            rating: 5
        }
    ];

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-pink-900">What Our Customers Say</h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Real feedback from our valued readers
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card bg-linear-to-br from-primary/10 to-secondary/10 shadow-xl border border-primary/20">
                            <div className="card-body">
                                <div className="flex items-center mb-4">
                                    
                                    <div className="ml-4">
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-base-content/60">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="rating rating-sm mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <input
                                            key={i}
                                            type="radio"
                                            className="mask mask-star-2 bg-yellow-400"
                                            checked={i < testimonial.rating}
                                            readOnly
                                        />
                                    ))}
                                </div>
                                <p className="text-base-content/80 italic">"{testimonial.text}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
