import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
    const blogs = [
        {
            title: 'Top 10 Books to Read This Year',
            excerpt: 'Discover the most impactful books that are making waves in 2024. From fiction to non-fiction, explore our curated list.',
            date: 'March 15, 2024',
            category: 'Reading Tips'
        },
        {
            title: 'How to Build a Reading Habit',
            excerpt: 'Learn effective strategies to cultivate a consistent reading habit and make books a part of your daily routine.',
            date: 'March 10, 2024',
            category: 'Lifestyle'
        },
        {
            title: 'Benefits of Reading Before Bed',
            excerpt: 'Explore the science-backed benefits of reading before sleep and how it improves your overall well-being.',
            date: 'March 5, 2024',
            category: 'Health & Wellness'
        }
    ];

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-pink-900">Latest Blog Posts</h2>
                        <p className="text-xl text-base-content/70">
                            Stay updated with reading tips, book reviews, and library news
                        </p>
                    </div>
                    <Link to="/blog" className="btn btn-primary btn-lg hidden md:flex">
                        View All Posts
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((blog, index) => (
                        <Link key={index} to="/blog" className="card bg-linear-to-br from-primary/10 to-secondary/10 shadow-xl border border-primary/20 hover:shadow-xl transition-all hover:-translate-y-2">
                            <div className="card-body">
                                <div className="badge badge-primary badge-outline mb-2">{blog.category}</div>
                                <h3 className="card-title text-lg mb-2 line-clamp-2">{blog.title}</h3>
                                <p className="text-sm text-base-content/70 mb-4 line-clamp-3">{blog.excerpt}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-base-content/60">{blog.date}</span>
                                    <span className="text-primary text-sm font-semibold">Read More →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-8 md:hidden">
                    <Link to="/blog" className="btn btn-primary">
                        View All Posts
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
