import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

import Home from "../Components/Home";
import AllBooks from "../Pages/AllBooks";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


import MyProfile from "../Dashboard/User/MyProfile";
import MyOrders from "../Dashboard/User/MyOrders";
import Invoices from "../Dashboard/User/Invoices";
import PrivateRoute from "../Provider/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Payment from "../Dashboard/User/Payment";


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
    }
        
        // ভবিষ্যতে Admin বা Librarian রাউট এখানে যোগ করতে পারবেন
        // { path: "all-users", element: <AllUsers /> },
        // { path: "add-book", element: <AddBook /> },
    ]
  }
]);

export default router;