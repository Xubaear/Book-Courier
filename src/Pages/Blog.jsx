import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Top 10 Books to Read This Year',
            excerpt: 'Discover the most impactful books that are making waves in 2024. From fiction to non-fiction, explore our curated list of must-read titles.',
            date: 'March 15, 2024',
            category: 'Reading Tips',
            image: '📚',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'How to Build a Reading Habit',
            excerpt: 'Learn effective strategies to cultivate a consistent reading habit and make books a part of your daily routine. Start small and build momentum.',
            date: 'March 10, 2024',
            category: 'Lifestyle',
            image: '📖',
            readTime: '7 min read'
        },
        {
            id: 3,
            title: 'Benefits of Reading Before Bed',
            excerpt: 'Explore the science-backed benefits of reading before sleep and how it improves your overall well-being, sleep quality, and mental health.',
            date: 'March 5, 2024',
            category: 'Health & Wellness',
            image: '🌙',
            readTime: '6 min read'
        },
        {
            id: 4,
            title: 'Best Fiction Books of 2024',
            excerpt: 'Dive into the world of fiction with our comprehensive list of the best fiction books released this year. From thrillers to romance, find your next favorite read.',
            date: 'February 28, 2024',
            category: 'Book Reviews',
            image: '✨',
            readTime: '8 min read'
        },
        {
            id: 5,
            title: 'Creating a Home Library on a Budget',
            excerpt: 'Tips and tricks for building your personal library without breaking the bank. Learn how to find affordable books and organize your collection.',
            date: 'February 20, 2024',
            category: 'Tips & Tricks',
            image: '🏠',
            readTime: '5 min read'
        },
        {
            id: 6,
            title: 'Digital vs Physical Books: Which is Better?',
            excerpt: 'A comprehensive comparison between digital and physical books, exploring the pros and cons of each format to help you decide what works best for you.',
            date: 'February 15, 2024',
            category: 'Discussion',
            image: '💻',
            readTime: '10 min read'
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        BookCourier Blog
                    </h1>
                    <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                        Discover reading tips, book reviews, library news, and insights to enhance your reading journey
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                            <div className="card-body">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="badge badge-primary badge-outline">{post.category}</span>
                                    <span className="text-xs text-base-content/60">{post.readTime}</span>
                                </div>
                                <div className="text-5xl mb-4">{post.image}</div>
                                <h2 className="card-title text-xl mb-2 line-clamp-2">{post.title}</h2>
                                <p className="text-base-content/70 mb-4 line-clamp-3">{post.excerpt}</p>
                                <div className="flex justify-between items-center mt-auto">
                                    <span className="text-sm text-base-content/60">{post.date}</span>
                                    <Link to={`/blog/${post.id}`} className="text-primary font-semibold text-sm hover:underline">
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-16 card bg-gradient-to-r from-primary to-secondary shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="card-title text-3xl text-white justify-center mb-4">Stay Updated</h2>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter and never miss a blog post, book recommendation, or library update.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 input input-bordered"
                            />
                            <button className="btn btn-accent text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
