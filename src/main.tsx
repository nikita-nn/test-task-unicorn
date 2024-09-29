import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import React from "react";
import ErrorBoundary from "../ErrorBoundary.tsx";

/**
 * EntryPoint приложения
 */

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <React.Suspense fallback={<div>Loading...</div>}>
      <StrictMode>
        <App />
      </StrictMode>
    </React.Suspense>
  </ErrorBoundary>,
);
