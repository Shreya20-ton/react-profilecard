// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // For React 18+
import App from './App';
import './App.css'; // Optional: global styles

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
