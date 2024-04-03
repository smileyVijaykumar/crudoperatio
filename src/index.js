import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./global.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// ReactDOM.render(<App/>,document.getElementById("root"));

createRoot(document.getElementById("root")).render(<App username="Harish"/>)