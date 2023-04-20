import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./globalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { MapPage } from "./Pages/MapPage";
import { DestinosPage } from "./Pages/DestinosPage";
import { SensibilizacaoPage } from "./Pages/SensibilizacaoPage";
import { Loading } from "./components/Loading";
import { UnicariocaLoading } from "./components/UnicariocaLoading";
import { SobreArraial } from "./Pages/SobreArraial";
import { QuizPage } from "./Pages/QuizPage";
import { ColetaSeletiva } from "./Pages/ColetaSeletiva";
import { PraiaDosAnjos } from "./Pages/PraiaDosAnjos";
import { PraiaDoForno } from "./Pages/PraiaDoForno";
import { InteractiveQuiz } from "./Pages/InteractiveQuiz";
import { PraiaDoFarol } from "./Pages/PraiaDoFarol";
import { AsPrainhasDoPontalDoAtalaia } from "./Pages/AsPrainhasDoPontalDoAtalaia";
import { PraiaGrande } from "./Pages/PraiaGrande";
import { Prainha } from "./Pages/Prainha";
import { PraiaDoPontal } from "./Pages/PraiaDoPontal";
import { DesenvolvedoresPage} from "./Pages/DesenvolvedoresPage"

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
  },
  {
    path: "/sobre-arraial",
    element: <SobreArraial />
  },
  {
    path: "/quiz",
    element: <QuizPage />
  },
  {
    path: "/coleta-seletiva",
    element: <ColetaSeletiva />
  },
  {
    path: "/quiz",
    element: <QuizPage />
  },
  {
    path: "/praia-dos-anjos",
    element: <PraiaDosAnjos />
  },
  {
    path: "/praia-do-forno",
    element: <PraiaDoForno />
  },
  {
    path: "/praia-do-farol",
    element: <PraiaDoFarol />
  },
  {
    path: "/as-prainhas-do-pontal-do-atalaia",
    element: <AsPrainhasDoPontalDoAtalaia />
  },
  {
    path: "/praia-grande",
    element: <PraiaGrande />
  },
  {
    path: "/prainha",
    element: <Prainha />
  },
  {
    path: "/praia-do-pontal",
    element: <PraiaDoPontal />
  },
  {
    path: "/desenvolvedores",
    element: <DesenvolvedoresPage />
  },
  {
    path: "/quiz-interativo",
    element: <InteractiveQuiz />
  }
]);

export const Routes = () => {
  const [appReady, setAppReady] = useState(false);
  const [unicariocaReady, setUnicariocaReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); //Menu Drawer

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  // Simula um tempo de carregamento de 3 segundos
  setTimeout(() => {
    setAppReady(true);
  }, 3500);

  if (appReady) {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  } else {
    setTimeout(() => {
      setUnicariocaReady(true);
    }, 2000);

    if (unicariocaReady) {
      return <Loading />;
    } else {
      return <UnicariocaLoading />;
    }
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
);
