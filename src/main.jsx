import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
// här använda jag HashRouter så att det bli inte fel när jag ska göra refrech till sidan
import "./index.css";
import App from "./App.jsx";
import "./i18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

