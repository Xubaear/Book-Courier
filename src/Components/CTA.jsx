import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-secondary to-accent">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Ready to Start Your Reading Journey?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-8">
                        Join thousands of readers who have discovered the convenience of BookCourier. 
                        Get started today and have your favorite books delivered to your doorstep!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/register" className="btn btn-lg btn-primary text-white shadow-xl hover:scale-105 transition-transform">
                            Create Free Account
                        </Link>
                        <Link to="/all-books" className="btn btn-lg btn-outline btn-white text-white border-white hover:bg-white hover:text-primary">
                            Browse Books
                        </Link>
                    </div>
                    <p className="text-white/70 mt-6 text-sm">
                        No credit card required • Free membership • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTA;
