import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const cors = require("cors");

root.render(<App />);
