import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IFrameProvider } from "./context/IFrameContext.jsx";
import { ShopifySliderProvider } from "./context/ShopifySliderContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopifySliderProvider>
      <IFrameProvider>
        <App />
      </IFrameProvider>
    </ShopifySliderProvider>
  </React.StrictMode>
);
