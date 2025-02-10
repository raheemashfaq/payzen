import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

import Layout from "./Components/Layout/Layout";
import Contact from "./Components/Contact Us/Contact";
import Payment from "./Pages/Payment Method/Payment";
import Faq from "./Components/FAQ'S/Faq";
import Pricing from "./Pages/Pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap everything inside Layout
    children: [
      { index: true, element: <Home /> }, 
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/payment-methods", element: <Payment /> },
      { path: "/faqs", element: <Faq /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
