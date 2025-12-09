import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/Home";
import AllBooks from "../Pages/AllBooks";
import Dashboard from "../Pages/Dashboard";

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
        }
    ]
  },
  {
        path: '/*',
        Component: Error
      }
]);

export default router;