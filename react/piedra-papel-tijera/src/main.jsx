import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
// Estilos de Bootstrap: quedan disponibles en toda la app
import 'bootstrap/dist/css/bootstrap.min.css';
// Nuestros estilos propios (fondo y animaciones)
import './index.css';
import App from './App.jsx';

// BrowserRouter conecta React Router con la barra de direcciones. StrictMode avisa de errores en desarrollo
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);