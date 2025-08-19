import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Initialize app
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  // Remove loading and render app
  const loadingElement = document.querySelector('.loading');
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }

  // Simple render without StrictMode to prevent double render
  root.render(<App />);
} else {
  console.error('Root element not found');
}