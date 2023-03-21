import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./globalStyles";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { DestinosPage } from "./Pages/DestinosPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  {
    path: "/destinos",
    element: <DestinosPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
