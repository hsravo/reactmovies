import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './style.scss';



ReactDOM.render(<Home />, document.querySelector("#root"));