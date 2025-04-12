import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";

import { Provider } from 'react-redux'
import  {store, persistor}  from './store/store'
import { PersistGate } from 'redux-persist/integration/react'



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
</React.StrictMode>
);