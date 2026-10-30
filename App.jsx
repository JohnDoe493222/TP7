import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Componentes de Vistas
function Inicio() {
  return <div className="view-container"><h2>Página de Inicio</h2><p>Bienvenido al sistema de trabajos prácticos.</p></div>;
}

function ProyectoBlob() {
  const [blobData, setBlobData] = React.useState(null);

  const crearBlob = () => setBlobData(new Blob(["Contenido dinámico de prueba."], { type: 'text/plain' }));
  const descargarFichero = () => {
    if (!blobData) return alert("Cree el Blob primero.");
    const url = URL.createObjectURL(blobData);
    const a = document.createElement('a');
    a.href = url; a.download = 'blob_route.txt'; a.click();
    URL.revokeObjectURL(url);
  };
  const usarSlice = () => {
    if (!blobData) return alert("Cree el Blob primero.");
    const s = blobData.slice(0, 10);
    const r = new FileReader();
    r.onload = (e) => alert("Slice: " + e.target.result);
    r.readAsText(s);
  };

  return (
    <div className="view-container">
      <h2>Ejemplo de uso de Blobs</h2>
      <div className="button-group">
        <button onClick={crearBlob} className="btn">Crear Blob de texto</button>
        <button onClick={descargarFichero} className="btn">Descargar Fichero</button>
        <button onClick={usarSlice} className="btn">Usar slice()</button>
      </div>
    </div>
  );
}

function AcercaDe() {
  return <div className="view-container"><h2>Acerca de nosotros</h2><p>Cátedra Lenguaje IV - UCASAL 2026.</p></div>;
}

function Contacto() {
  return <div className="view-container"><h2>Contacto</h2><p>Correo de Soporte: soporte@ucasal.edu.ar</p></div>;
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <div className="logo">logo</div>
          <nav className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/blob">ProyectoBlob</Link>
            <Link to="/acerca">Acerca de nosotros</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/blob" element={<ProyectoBlob />} />
            <Route path="/acerca" element={<AcercaDe />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;