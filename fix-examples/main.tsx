import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Robust root element detection
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found');
  document.body.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>App Error</h1><p>Root element missing</p></div>';
} else {
  try {
    // Remove any existing loading elements
    const loadingElements = document.querySelectorAll('.loading, .loader');
    loadingElements.forEach(el => el.remove());
    
    const root = createRoot(rootElement);
    root.render(<App />);
  } catch (error) {
    console.error('App initialization failed:', error);
    rootElement.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>Initialization Error</h1><p>Please refresh the page</p></div>';
  }
}