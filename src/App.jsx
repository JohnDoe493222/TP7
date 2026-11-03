import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Inicio } from './pages/Inicio';
import { ProyectoBlob } from './pages/ProyectoBlob';
import { AcercaDeNosotros } from './pages/AcercaDeNosotros';
import { Contacto } from './pages/Contacto';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header />
        <main className="main-body">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyecto-blob" element={<ProyectoBlob />} />
            <Route path="/acerca" element={<AcercaDeNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}