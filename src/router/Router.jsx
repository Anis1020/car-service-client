import { createBrowserRouter } from "react-router-dom";
import Layout from "../homeLayout/Layout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import BookNowPage from "../pages/BookNowPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/bookNow/:id",
        element: <BookNowPage></BookNowPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);
