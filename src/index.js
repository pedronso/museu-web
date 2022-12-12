import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import Acervo from './components/Acervo';
import NoPage from './components/Nopage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route index element={<Home />} />
        <Route path="acervo" element={<Acervo />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);