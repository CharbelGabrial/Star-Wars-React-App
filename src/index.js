import React from "react";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import { StateProvider } from "./context/StateManagement";
import reducer, { FilmDetails } from "./context/reducer";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StateProvider intialVal={FilmDetails} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
