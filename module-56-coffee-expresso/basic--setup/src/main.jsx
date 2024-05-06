import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SingUp from "./components/SingUp.jsx";
import Login from "./components/Login.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import User from "./components/User.jsx";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Users2 from "./components/Users2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/users",
    element: <User></User>,
    loader: () => fetch("http://localhost:5000/user"),
  },
  {
    path: "/users2",
    element: <Users2></Users2>,

  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/singup",
    element: <SingUp></SingUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
