import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

console.log('🚀 Starting DAQ Consulting App...');

function initializeApp() {
  const rootElement = document.getElementById('root');
  const loadingElement = document.getElementById('app-loading');
  
  if (!rootElement) {
    console.error('❌ Root element not found');
    return;
  }

  try {
    // Hide loading screen
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }
    
    const root = createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log('✅ App mounted successfully');
    
  } catch (error) {
    console.error('❌ Failed to mount app:', error);
    
    // Hide loading and show error
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }
    
    const errorElement = document.getElementById('js-error');
    if (errorElement) {
      errorElement.style.display = 'block';
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}