import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AuthProvider from "./authProvider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
