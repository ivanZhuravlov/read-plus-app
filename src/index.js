import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./locales/i18n";
import { Provider } from "react-redux";

import store from "./store/store";

import "./styles-index.scss";
import { PersistGate } from "redux-persist/integration/react";

const app = (
  <BrowserRouter>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
