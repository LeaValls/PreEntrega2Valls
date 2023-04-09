import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomProvider } from "./context";
import { initializeApp } from "firebase/app";

import Cart from "./componentes/Routes/Cart";
import ItemRoot from "./componentes/Routes/Item";
import Root from "./componentes/Routes/Root";
import Layaout from "./componentes/Layout";
import Checkout from "./componentes/checkout";


const firebaseConfig = {
  apiKey: "AIzaSyBbBd-1lA8GbDcKpyCsANfopnZy_FRP848",
  authDomain: "mariapaca-7a305.firebaseapp.com",
  projectId: "mariapaca-7a305",
  storageBucket: "mariapaca-7a305.appspot.com",
  messagingSenderId: "811617809447",
  appId: "1:811617809447:web:e4b36c3cb3f477e8168a02"
};


const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    element: <Layaout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/category/:id",
        element: <Root />,
      },
      {
        path: "/item/:id",
        element: <ItemRoot />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);