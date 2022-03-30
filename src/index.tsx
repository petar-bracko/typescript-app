import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style/Reset.css";
import "./style/index.css";

createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <App />
  </StrictMode>
);
