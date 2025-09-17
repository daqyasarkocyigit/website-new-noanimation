import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

console.log('🚀 DAQ Consulting App starting...');

function mountApp() {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('❌ Root element not found');
    return;
  }

  try {
    const root = createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log('✅ App mounted successfully');
    
    // Hide loading screen
    const loadingElement = document.getElementById('app-loading');
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }
    
  } catch (error) {
    console.error('❌ Failed to mount app:', error);
    
    // Show error message
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 40px; text-align: center; font-family: system-ui, sans-serif;">
          <h1 style="color: #ef4444; margin-bottom: 16px;">Application Error</h1>
          <p style="color: #374151; margin-bottom: 24px;">The application failed to load.</p>
          <button onclick="window.location.reload()" style="
            background: #ef4444; 
            color: white; 
            border: none; 
            padding: 12px 24px; 
            border-radius: 6px; 
            cursor: pointer;
            font-size: 16px;
          ">Reload Page</button>
        </div>
      `;
    }
  }
}

// Mount the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}

// Basic error handling
window.addEventListener('error', (e) => {
  if (e.message !== 'Script error.') {
    console.error('Global error:', e.error || e.message);
  }
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});