import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        About BookCourier
                    </h1>
                    <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                        Bringing the library experience directly to your doorstep
                    </p>
                </div>

                {/* Mission Section */}
                <section className="mb-16">
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-3xl mb-4">Our Mission</h2>
                            <p className="text-lg mb-4">
                                BookCourier was founded with a simple yet powerful vision: to make books accessible to everyone, 
                                regardless of their location or schedule. We believe that access to knowledge and literature 
                                should be convenient, affordable, and hassle-free.
                            </p>
                            <p className="text-lg">
                                Our platform connects readers with libraries across the country, enabling you to borrow and 
                                return books through our secure delivery system. No more long commutes, limited library hours, 
                                or unavailable titles - just books delivered to your door when you need them.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body text-center">
                                <div className="text-5xl mb-4">📚</div>
                                <h3 className="card-title justify-center text-xl">Accessibility</h3>
                                <p>Making books available to everyone, everywhere, at any time.</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body text-center">
                                <div className="text-5xl mb-4">⚡</div>
                                <h3 className="card-title justify-center text-xl">Convenience</h3>
                                <p>Fast, reliable delivery that fits your lifestyle and schedule.</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body text-center">
                                <div className="text-5xl mb-4">🤝</div>
                                <h3 className="card-title justify-center text-xl">Quality</h3>
                                <p>Premium packaging and careful handling to preserve your books.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="mb-16">
                    <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                        <div className="stat">
                            <div className="stat-title">Books Delivered</div>
                            <div className="stat-value text-primary">10K+</div>
                            <div className="stat-desc">Since 2023</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Active Members</div>
                            <div className="stat-value text-secondary">5K+</div>
                            <div className="stat-desc">Growing daily</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Coverage Areas</div>
                            <div className="stat-value text-accent">64</div>
                            <div className="stat-desc">Districts nationwide</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Library Partners</div>
                            <div className="stat-value">200+</div>
                            <div className="stat-desc">Across the country</div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="badge badge-primary badge-lg mb-4">1</div>
                            <h3 className="font-bold text-lg mb-2">Browse & Select</h3>
                            <p className="text-sm">Explore our extensive collection and find your next read</p>
                        </div>
                        <div className="text-center">
                            <div className="badge badge-secondary badge-lg mb-4">2</div>
                            <h3 className="font-bold text-lg mb-2">Place Order</h3>
                            <p className="text-sm">Add delivery address and confirm your booking</p>
                        </div>
                        <div className="text-center">
                            <div className="badge badge-accent badge-lg mb-4">3</div>
                            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                            <p className="text-sm">We deliver your books securely to your doorstep</p>
                        </div>
                        <div className="text-center">
                            <div className="badge badge-info badge-lg mb-4">4</div>
                            <h3 className="font-bold text-lg mb-2">Return & Repeat</h3>
                            <p className="text-sm">Return books when done and order more!</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
