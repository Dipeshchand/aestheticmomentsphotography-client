// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from "./router";
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


