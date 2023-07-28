import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./features/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  </React.StrictMode>
);
