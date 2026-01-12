import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        { name: 'Fiction', count: '500+', icon: '📚', color: 'primary' },
        { name: 'Non-Fiction', count: '300+', icon: '📖', color: 'secondary' },
        { name: 'Science', count: '250+', icon: '🔬', color: 'accent' },
        { name: 'History', count: '180+', icon: '🏛️', color: 'info' },
        { name: 'Biography', count: '150+', icon: '👤', color: 'success' },
        { name: 'Technology', count: '200+', icon: '💻', color: 'warning' },
        { name: 'Education', count: '400+', icon: '🎓', color: 'error' },
        { name: 'Literature', count: '350+', icon: '✍️', color: 'primary' }
    ];

    return (
        <section className="py-16 md:py-20 bg-base-200">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Browse by Category</h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Explore our vast collection organized by categories
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((category, index) => (
                        <Link 
                            key={index} 
                            to="/all-books" 
                            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
                        >
                            <div className="card-body items-center text-center p-4">
                                <div className="text-4xl mb-2">{category.icon}</div>
                                <h3 className="card-title text-base mb-1">{category.name}</h3>
                                <p className="text-xs text-base-content/60">{category.count} books</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
