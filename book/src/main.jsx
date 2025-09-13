import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Bible from "../src/components/books/Bible"
import Genesis from "../src/components/books/genesis/Genesis"
import Chapter1 from '../src/components/books/genesis/chapter/Chapter1'

const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />
  },
  {
    path: "/bible",
    element: <Bible />
  }, 
  {
    path: "/genesis",
    element: <Genesis />
  },
  {
    path: "/chapter1",
    element: <Chapter1 />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
