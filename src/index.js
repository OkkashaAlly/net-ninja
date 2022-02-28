import React from "react";
import ReactDOM from "react-dom";
import * as bootstrap from "bootstrap";
import App from "./App";
import "./index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

let tooltipTriggerList = [].slice.call(document.querySelectorAll(".tt"));
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
