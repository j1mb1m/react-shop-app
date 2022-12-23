import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Contacts from "./pages/Contacts";
import Catalog from "./pages/Catalog";


import LanguageState from "./context/LanguageState";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <LanguageState>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
      </LanguageState>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
