import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CmsSliderContextProvider } from "./context/CmsSliderContext.jsx";
import { IFrameProvider } from "./context/IFrameContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CmsSliderContextProvider>
      <IFrameProvider>
        <App />
      </IFrameProvider>
    </CmsSliderContextProvider>
  </React.StrictMode>
);
