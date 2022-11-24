import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './components/Home';
import App from './App';
import NoPage from './components/Nopage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route index element={<Home />} />
        <Route path="acervo" element={<App />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);