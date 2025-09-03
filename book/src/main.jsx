import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Bible from "../src/components/books/Bible"

const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />
  },
  {
    path: "bible",
    element: <Bible />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
