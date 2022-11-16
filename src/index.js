import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme/index";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <ContextProvider>
          <App />
          </ContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>
);
