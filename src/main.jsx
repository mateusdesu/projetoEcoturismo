import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./globalStyles";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { MapPage} from "./Pages/MapPage";
import { DestinosPage } from "./Pages/DestinosPage";
import { SensibilizacaoPage } from "./Pages/SensibilizacaoPage";

const router = createBrowserRouter([
  { path: "/",
    element: <MainPage /> },
  {
    path: "/destinos",
    element: <DestinosPage />
  },
  {path:"/mapa",
   element: <MapPage/>},
   {path:"/sensibilizacao",
  element: <SensibilizacaoPage/>}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
