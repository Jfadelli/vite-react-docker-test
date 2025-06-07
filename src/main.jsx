import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // import Tailwind styles

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl); // ✅ only do this ONCE

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);