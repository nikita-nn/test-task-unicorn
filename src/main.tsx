import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import "./styles/fonts.css";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.Suspense fallback={<div>Loading...</div>}>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </React.Suspense>,
);
