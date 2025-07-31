//main.tsx

// import { createRoot } from "react-dom/client";
// import App from "./src/App";
// import "./index.css";

// createRoot(document.getElementById("root")!).render(<App />);


// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Make sure App.tsx exists in same folder

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
