import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './router'; 
import "./style/style.scss";
import HomePage from "./pages/users/HomePage"




ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RouterCustom />
  </BrowserRouter>,

);