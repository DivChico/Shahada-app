import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.tsx";
import { AppProvider } from "./context/AppContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <MainLayout />
    </AppProvider>
  </StrictMode>
);
