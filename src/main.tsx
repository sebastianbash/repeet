import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import Router from "./router";

import "./styles/index.css";
import i18n from "./translation";
import store, { persistor } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
