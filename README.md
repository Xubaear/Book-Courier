📚 BookCourier
BookCourier is a full-stack web application designed to facilitate the buying and selling of books. It features a robust multi-role system (User, Librarian, Admin) where users can browse and order books, librarians can manage book inventories, and admins oversee the entire platform. The application focuses on a seamless user experience with secure authentication and dynamic features.


🔗 Live URL
[Insert Your Live Website Link Here]


✨ Key Features
🌍 General
Responsive Design: Fully optimized for mobile, tablet, and desktop devices.

Dark/Light Mode: Dynamic theme toggle with local storage persistence.

Interactive Maps: Integrated Leaflet maps for location visualization.

Real-time Notifications: Toast notifications for user actions (success/error messages).

🔐 Security & Authentication
Firebase Authentication: Secure login/registration using Email/Password and Google Sign-In.

JWT Authorization: Secure API access using JSON Web Tokens (stored in HttpOnly cookies).

Role-Based Access Control (RBAC): Distinct dashboards and routes for Users, Librarians, and Admins.

👤 User Features
Browse & Search: Search books by title and sort by price.

Order System: Place orders for available books and view order history.

Order Management: Cancel pending orders or proceed to payment.

Dynamic Profile: View profile details based on role.

তোমার প্রজেক্টের জন্য একটি সুন্দর এবং প্রফেশনাল README.md ফাইল তৈরি করে দিচ্ছি। তুমি এটা কপি করে তোমার গিটহাবে বা প্রজেক্ট ফোল্ডারে README.md নামে সেভ করো।

📚 BookCourier
BookCourier is a full-stack web application designed to facilitate the buying and selling of books. It features a robust multi-role system (User, Librarian, Admin) where users can browse and order books, librarians can manage book inventories, and admins oversee the entire platform. The application focuses on a seamless user experience with secure authentication and dynamic features.

🔗 Live URL
[Insert Your Live Website Link Here]

✨ Key Features
🌍 General
Responsive Design: Fully optimized for mobile, tablet, and desktop devices.

Dark/Light Mode: Dynamic theme toggle with local storage persistence.

Interactive Maps: Integrated Leaflet maps for location visualization.

Real-time Notifications: Toast notifications for user actions (success/error messages).

🔐 Security & Authentication
Firebase Authentication: Secure login/registration using Email/Password and Google Sign-In.

JWT Authorization: Secure API access using JSON Web Tokens (stored in HttpOnly cookies).

Role-Based Access Control (RBAC): Distinct dashboards and routes for Users, Librarians, and Admins.

👤 User Features
Browse & Search: Search books by title and sort by price.

Order System: Place orders for available books and view order history.

Order Management: Cancel pending orders or proceed to payment.

Dynamic Profile: View profile details based on role.

🛠 Admin & Librarian Features
Manage Users (Admin): Promote users to Admin or Librarian roles.

Manage Books:

Librarian: Add new books to the inventory.

Admin: Publish/Unpublish books and delete books (cascading delete for related orders).

Stock Management: Automatic stock status updates (In Stock / Out of Stock).



📦 NPM Packages Used
🎨 Frontend (Client-Side)

    Package	                           Purpose
react	            JavaScript library for building user interfaces
react-router-dom	Handling routing and navigation
firebase	        Authentication and backend-as-a-service
tailwindcss	        Utility-first CSS framework for styling
daisyui	            Component library for Tailwind CSS
react-toastify	    displaying toast notifications
react-leaflet	    Rendering interactive maps
vite	            Next Generation Frontend Tooling


⚙️ Backend (Server-Side)

  Package                          	Purpose
express	            Fast, unopinionated, minimalist web framework           for Node.js

mongodb	            Official MongoDB driver for database connection
jsonwebtoken (JWT)	Securely transmitting information as a JSON object

cookie-parser	    Parse Cookie header and populate req.cookies
cors	            Middleware to enable Cross-Origin Resource Sharing

dotenv	            Loading environment variables from a .env file