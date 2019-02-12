import "babel-polyfill";
import "es6-promise";
import "isomorphic-fetch";
import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./Componetns/App";

render(<App />, document.getElementById("root"));
