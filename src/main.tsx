import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  const errorDiv = document.createElement('div');
  errorDiv.style.padding = '20px';
  errorDiv.style.textAlign = 'center';
  errorDiv.innerHTML = '<h1>Error</h1><p>Unable to load application. Please try refreshing the page.</p>';
  document.body.appendChild(errorDiv);
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}