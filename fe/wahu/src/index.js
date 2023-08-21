import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from "./pages/users/HomePage";
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './router'; 



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RouterCustom />
  </BrowserRouter>,

);