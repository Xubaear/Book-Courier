import React from 'react';

const Privacy = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                    <p className="text-base-content/70">Last updated: March 2024</p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <section className="card bg-base-100 shadow-xl mb-6">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">1. Introduction</h2>
                            <p className="text-base-content/80">
                                BookCourier ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                            </p>
                        </div>
                    </section>

                    <section className="card bg-base-100 shadow-xl mb-6">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">2. Information We Collect</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                                    <p className="text-base-content/80">
                                        We collect information that you provide directly to us, including:
                                    </p>
                                    <ul className="list-disc list-inside text-base-content/80 ml-4 space-y-1">
                                        <li>Name and contact information (email, phone number, address)</li>
                                        <li>Account credentials (when you create an account)</li>
                                        <li>Payment information (processed securely through third-party payment processors)</li>
                                        <li>Order history and preferences</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Automatically Collected Information</h3>
                                    <p className="text-base-content/80">
                                        When you visit our website, we automatically collect:
                                    </p>
                                    <ul className="list-disc list-inside text-base-content/80 ml-4 space-y-1">
                                        <li>Device information (IP address, browser type, operating system)</li>
                                        <li>Usage data (pages visited, time spent, click patterns)</li>
                                        <li>Cookies and similar tracking technologies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card bg-base-100 shadow-xl mb-6">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">3. How We Use Your Information</h2>
                            <p className="text-base-content/80 mb-3">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-base-content/80 ml-4 space-y-1">
                                <li>Process and fulfill your orders</li>
                                <li>Manage your account and provide customer support</li>
                                <li>Send you order confirmations, updates, and delivery notifications</li>
                                <li>Improve our services and user experience</li>
                                <li>Send promotional emails (with your consent)</li>
                                <li>Detect and prevent fraud and security issues</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>
                    </section>

                    <section className="card bg-base-100 shadow-xl mb-6">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">4. Information Sharing</h2>
                            <p className="text-base-content/80 mb-3">
                                We do not sell your personal information. We may share your information with:
                            </p>
                            <ul className="list-disc list-inside text-base-content/80 ml-4 space-y-1">
                                <li>Service providers (payment processors, delivery partners) who assist in our operations</li>
                                <li>Legal authorities when required by law or to protect our rights</li>
                                <li>Business partners with your explicit consent</li>
                            </ul>
                        </div>
                    </section>

                    <section className="card bg-base-100 shadow-xl mb-6">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">5. Data Security</h2>
                            <p className="text-base-content/80">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                            </p>
                        </div>
                    </section>

                    <section className="card bg-base-100 shadow-xl mb-6">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">6. Your Rights</h2>
                            <p className="text-base-content/80 mb-3">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-base-content/80 ml-4 space-y-1">
                                <li>Access and receive a copy of your personal data</li>
                                <li>Rectify inaccurate or incomplete information</li>
                                <li>Request deletion of your personal data</li>
                                <li>Object to processing of your personal data</li>
                                <li>Withdraw consent at any time</li>
                                <li>File a complaint with data protection authorities</li>
                            </ul>
                        </div>
                    </section>

                    <section className="card bg-base-100 shadow-xl mb-6">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">7. Cookies</h2>
                            <p className="text-base-content/80">
                                We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can control cookies through your browser settings, but this may affect website functionality.
                            </p>
                        </div>
                    </section>

                    <section className="card bg-base-100 shadow-xl mb-6">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">8. Children's Privacy</h2>
                            <p className="text-base-content/80">
                                Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </div>
                    </section>

                    <section className="card bg-base-100 shadow-xl mb-6">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">9. Changes to This Policy</h2>
                            <p className="text-base-content/80">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. You are advised to review this policy periodically.
                            </p>
                        </div>
                    </section>

                    <section className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">10. Contact Us</h2>
                            <p className="text-base-content/80 mb-3">
                                If you have questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="space-y-1 text-base-content/80">
                                <p><strong>Email:</strong> privacy@bookcourier.com</p>
                                <p><strong>Phone:</strong> +880 1234-567890</p>
                                <p><strong>Address:</strong> 123 Library Street, Book District, Dhaka, Bangladesh 1200</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
