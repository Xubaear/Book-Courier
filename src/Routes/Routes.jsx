import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/Home";
import AllBooks from "../Pages/AllBooks";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
        {
            index: true,
            path: '/',
          Component: Home
        },
        {
          path: '/all-books',
          Component: AllBooks
        },
        {
          path: '/dashboard',
          Component: Dashboard
        },
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/register',
          Component: Register
        }
    ]
  },
  {
        path: '/*',
        Component: Error
      }
]);

export default router;