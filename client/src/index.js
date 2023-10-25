import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//components
import Home from "./views/Home/Home";
import AddProduct from "./views/AddProduct/AddProduct";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import UpdateProduct from "./views/UpdateProduct/UpdateProduct";

//routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/update-product/:_id",
    element: <UpdateProduct />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetail />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
