import React, { useState } from 'react';

export function ProyectoBlob() {
  const [blobCreado, setBlobCreado] = useState(null);
  const [contenidoSlice, setContenidoSlice] = useState('');

  const crearBlob = () => {
    const nuevoBlob = new Blob(["Demostración de Blobs con React Router DOM."], { type: 'text/plain' });
    setBlobCreado(nuevoBlob);
    alert('Blob generado en la vista ProyectoBlob.');
  };

  const descargarBlob = () => {
    if (!blobCreado) return alert('Genera un Blob primero.');
    const url = URL.createObjectURL(blobCreado);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tp7-blob.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const aplicarSlice = async () => {
    if (!blobCreado) return alert('Genera un Blob primero.');
    const recortado = await blobCreado.slice(0, 12).text();
    setContenidoSlice(recortado);
  };

  return (
    <div className="page-container">
      <h1>Ejemplo de uso de Blobs</h1>
      <div className="button-group">
        <button className="btn" onClick={crearBlob}>Crear Blob de texto</button>
        <button className="btn" onClick={descargarBlob}>Descargar Blob</button>
        <button className="btn" onClick={aplicarSlice}>Usar Slice</button>
      </div>

      {contenidoSlice && (
        <div className="resultado-slice">
          <p><strong>Slice (0-12):</strong> {contenidoSlice}</p>
        </div>
      )}
    </div>
  );
}