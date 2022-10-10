import React from "react";
import ReactDom from "react-dom"; 
import  Home from "./views/home/home"
import './styles/main.css';

ReactDom.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
