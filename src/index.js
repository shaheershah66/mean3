import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { IFrameProvider } from "./context/IFrameContext.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <IFrameProvider>
        <App />
      </IFrameProvider>
  </React.StrictMode>
);

