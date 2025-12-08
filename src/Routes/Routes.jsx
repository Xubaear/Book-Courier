import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
        {
            index: true,

        }
    ]
  },
]);

export default router;