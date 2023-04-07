import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./globalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { MapPage } from "./Pages/MapPage";
import { DestinosPage } from "./Pages/DestinosPage";
import { SensibilizacaoPage } from "./Pages/SensibilizacaoPage";
import { Loading } from "./components/Loading";
import { UnicariocaLoading} from "./components/UnicariocaLoading"
import { SobreArraial } from "./Pages/SobreArraial";

import { useState } from "react";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <MainPage /> 
  },
  {
    path: "/destinos",
    element: <DestinosPage />
  },
  { 
    path: "/mapa", 
    element: <MapPage /> 
  },
  { 
    path: "/sensibilizacao", 
    element: <SensibilizacaoPage /> 
  },{
    path: "/sobre-arraial",
    element: <SobreArraial />
  }
]);

export const Routes = () => {
  const [appReady, setAppReady] = useState(false);
  const [unicariocaReady, setUnicariocaReady] = useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false); //Menu Drawer

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  }

  const handleMenuClose = () => {
    setMenuOpen(false);
  }

  // Simula um tempo de carregamento de 3 segundos
  setTimeout(() => {
    setAppReady(true);
  }, 3000);


  if (appReady) {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  } else {
    setTimeout(()=>{
      setUnicariocaReady(true)
    }, 1500);

    if(unicariocaReady){
      return <Loading />;
    }
    else{
      return(<UnicariocaLoading/>)
    }
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
);
