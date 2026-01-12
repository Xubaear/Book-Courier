// import React from 'react';

// const Terms = () => {
//     return (
//         <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
//             <div className="container mx-auto max-w-4xl">
//                 <div className="text-center mb-12">
//                     <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//                         Terms of Service
//                     </h1>
//                     <p className="text-base-content/70">Last updated: March 2024</p>
//                 </div>

//                 <div className="prose prose-lg max-w-none">
//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">1. Acceptance of Terms</h2>
//                             <p className="text-base-content/80">
//                                 By accessing and using BookCourier's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
//                             </p>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">2. Service Description</h2>
//                             <p className="text-base-content/80">
//                                 BookCourier is a library-to-home delivery service that allows users to browse, order, and receive books from partner libraries. We facilitate the connection between users and libraries but are not the direct provider of the books.
//                             </p>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">3. User Accounts</h2>
//                             <div className="space-y-3">
//                                 <p className="text-base-content/80">
//                                     To use our services, you must:
//                                 </p>
//                                 <ul className="list-disc list-inside text-base-content/80 ml-4 space-y-1">
//                                     <li>Be at least 18 years old or have parental consent</li>
//                                     <li>Provide accurate and complete information</li>
//                                     <li>Maintain the security of your account credentials</li>
//                                     <li>Notify us immediately of any unauthorized use</li>
//                                     <li>Accept responsibility for all activities under your account</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">4. Orders and Payment</h2>
//                             <div className="space-y-3">
//                                 <p className="text-base-content/80">
//                                     When placing an order:
//                                 </p>
//                                 <ul className="list-disc list-inside text-base-content/80 ml-4 space-y-1">
//                                     <li>All orders are subject to book availability</li>
//                                     <li>Prices are displayed in Bangladeshi Taka (Tk) and are subject to change</li>
//                                     <li>Payment must be made through our accepted payment methods</li>
//                                     <li>Delivery charges are calculated based on location and order size</li>
//                                     <li>Orders are confirmed only after payment verification</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">5. Delivery and Returns</h2>
//                             <div className="space-y-3">
//                                 <h3 className="font-semibold text-lg">Delivery:</h3>
//                                 <ul className="list-disc list-inside text-base-content/80 ml-4 space-y-1">
//                                     <li>Delivery times are estimates and may vary</li>
//                                     <li>We are not responsible for delays due to external factors (weather, strikes, etc.)</li>
//                                     <li>You must provide accurate delivery addresses</li>
//                                     <li>Failed delivery attempts may incur additional charges</li>
//                                 </ul>
//                                 <h3 className="font-semibold text-lg mt-4">Returns:</h3>
//                                 <ul className="list-disc list-inside text-base-content/80 ml-4 space-y-1">
//                                     <li>Books must be returned within 30 days of delivery</li>
//                                     <li>Books must be in good condition (no damage, markings, or wear)</li>
//                                     <li>Return shipping costs are the responsibility of the user</li>
//                                     <li>Refunds are processed within 5-7 business days after inspection</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">6. User Conduct</h2>
//                             <p className="text-base-content/80 mb-3">
//                                 You agree not to:
//                             </p>
//                             <ul className="list-disc list-inside text-base-content/80 ml-4 space-y-1">
//                                 <li>Use our services for any illegal purpose</li>
//                                 <li>Violate any applicable laws or regulations</li>
//                                 <li>Interfere with or disrupt our services or servers</li>
//                                 <li>Attempt to gain unauthorized access to our systems</li>
//                                 <li>Use automated systems to access our services without permission</li>
//                                 <li>Impersonate any person or entity</li>
//                                 <li>Damage or destroy books in your possession</li>
//                             </ul>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">7. Intellectual Property</h2>
//                             <p className="text-base-content/80">
//                                 All content on our website, including text, graphics, logos, and software, is the property of BookCourier or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
//                             </p>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">8. Limitation of Liability</h2>
//                             <p className="text-base-content/80">
//                                 BookCourier is not liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability is limited to the amount you paid for the specific order in question.
//                             </p>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">9. Disclaimers</h2>
//                             <p className="text-base-content/80">
//                                 Our services are provided "as is" without warranties of any kind. We do not guarantee that our services will be uninterrupted, secure, or error-free. Book availability and condition are the responsibility of partner libraries.
//                             </p>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">10. Termination</h2>
//                             <p className="text-base-content/80">
//                                 We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or any other reason we deem necessary. You may cancel your account at any time through your account settings.
//                             </p>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">11. Governing Law</h2>
//                             <p className="text-base-content/80">
//                                 These Terms of Service are governed by the laws of Bangladesh. Any disputes arising from these terms will be resolved in the courts of Dhaka, Bangladesh.
//                             </p>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl mb-6">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">12. Changes to Terms</h2>
//                             <p className="text-base-content/80">
//                                 We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes are posted constitutes acceptance of the new terms.
//                             </p>
//                         </div>
//                     </section>

//                     <section className="card bg-base-100 shadow-xl">
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl">13. Contact Information</h2>
//                             <p className="text-base-content/80 mb-3">
//                                 For questions about these Terms of Service, please contact us:
//                             </p>
//                             <div className="space-y-1 text-base-content/80">
//                                 <p><strong>Email:</strong> legal@bookcourier.com</p>
//                                 <p><strong>Phone:</strong> +880 1234-567890</p>
//                                 <p><strong>Address:</strong> 123 Library Street, Book District, Dhaka, Bangladesh 1200</p>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Terms;
