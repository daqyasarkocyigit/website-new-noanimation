import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Get root element
const rootElement = document.getElementById('root');

if (rootElement) {
  // Create root and render
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}