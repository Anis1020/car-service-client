import { createBrowserRouter } from "react-router-dom";
import Layout from "../homeLayout/Layout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import BookNowPage from "../pages/BookNowPage";
import BookedService from "../pages/BookedService";

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
        path: "/services/:id",
        element: <BookNowPage></BookNowPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/booked",
        element: <BookedService></BookedService>,
        loader: () => fetch("http://localhost:5000/booked"),
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
