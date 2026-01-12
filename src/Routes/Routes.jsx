import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

import Home from "../Components/Home";
import AllBooks from "../Pages/AllBooks";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Help from "../Pages/Help";
import Privacy from "../Pages/Privacy";
import Terms from "../Pages/Terms";
import BookDetails from "../Pages/BookDetails";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


import MyProfile from "../Dashboard/User/MyProfile";
import MyOrders from "../Dashboard/User/MyOrders";
import Invoices from "../Dashboard/User/Invoices";
import PrivateRoute from "../Provider/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Payment from "../Dashboard/User/Payment";
import AddBook from "../Dashboard/Librarian/AddBook";
import MyBooks from "../Dashboard/Librarian/MyBook";
import ManageOrders from "../Dashboard/Librarian/ManageOrders";
import AllUsers from "../Dashboard/Admin/AllUsers";
import ManageBooks from "../Dashboard/Admin/ManageBooks";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/all-books',
          element: <PrivateRoute><AllBooks /></PrivateRoute> 
        },
        {
          path: '/book/:id',
          element: <BookDetails />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/help',
          element: <Help />
        },
        {
          path: '/privacy',
          element: <Privacy />
        },
        {
          path: '/terms',
          element: <Terms />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
    ]
  },
  
  {
    path: "dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>, 
    errorElement: <Error />,
    children: [
        
        {
            path: "profile",
            element: <MyProfile />
        },
        {
            path: "my-orders",
            element: <MyOrders />
        },
        {
            path: "invoices",
            element: <Invoices />
        },
        {
        path: 'payment/:id',
        element: <Payment />
    },
    {
        path: 'add-book',
        element: <AddBook />
    },
    {
        path: 'my-books',
        element: <MyBooks />
    },
    {
        path: 'orders', 
        element: <ManageOrders />
    },
        
        { 
            path: "all-users", 
            element: <AllUsers /> 
        },
        { 
            path: "manage-books", 
            element: <ManageBooks /> 
        }
    ]
  }
]);

export default router;