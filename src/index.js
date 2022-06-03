import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MainThemeProvider from "./ThemeProvider";
import "antd/dist/antd.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainThemeProvider>
      <App />
    </MainThemeProvider>
  </React.StrictMode>
);
