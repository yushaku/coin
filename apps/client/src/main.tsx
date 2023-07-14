import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MoralisProvider } from "react-moralis";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MoralisProvider appId="xxxxxxxx" serverUrl="xxxxxxxx">
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
