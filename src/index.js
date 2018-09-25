import React from "react";
import ReactDOM from "react-dom";
import store from "./Store";
import {Provider} from "react-redux";
import Router from "./routes";

// Styles
import "bootstrap/dist/css/bootstrap";
import "./common";

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById("app")
);
