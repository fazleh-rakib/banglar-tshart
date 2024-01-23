import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componrnts/Home/Home.jsx";
import LayOut from "./componrnts/LayOut/LayOut.jsx";
import OrderReview from "./componrnts/OrderReview/OrderReview..jsx";
import Aboout from "./componrnts/About/Aboout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch ('tshirt.json'),
      },
      {
        path: "review",
        element: <OrderReview />,
      },
      {
        path: "about",
        element: <Aboout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
