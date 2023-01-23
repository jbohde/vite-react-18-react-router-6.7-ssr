import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./App";

const router = createBrowserRouter(routes);
const app = document.getElementById("app");

if (app) {
  ReactDOM.hydrateRoot(
    app,
    <React.StrictMode>
      <RouterProvider router={router} fallbackElement={null} />
    </React.StrictMode>
  );
}
