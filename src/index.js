import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./pages/Add";
import Reports from "./pages/Reports";
import NewsDetail from "./pages/NewsDetail";
import Login from "./components/Loginpage";
import Register from "./components/Register";
import PasswordReset from "./components/PasswordReset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/news/:id",
    element: <NewsDetail />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/password-reset",
    element: <PasswordReset/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
