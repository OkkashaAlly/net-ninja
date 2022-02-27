import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Tooltip } from "bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl);
});
