import { createBrowserRouter } from "react-router-dom";
import Layout from "../homeLayout/Layout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

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
