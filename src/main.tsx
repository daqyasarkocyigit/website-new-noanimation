import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found');
  document.body.innerHTML = '<div style="padding: 40px; text-align: center;"><h1>Loading Error</h1><p>Please refresh the page</p></div>';
}