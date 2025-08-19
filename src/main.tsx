import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Debug logging
console.log('🚀 Main.tsx starting...');

// Enhanced error handling and root mounting
function initializeApp() {
  const rootElement = document.getElementById('root');
  const loadingElement = document.getElementById('app-loading');
  
  console.log('🔍 Root element found:', !!rootElement);
  console.log('🔍 Loading element found:', !!loadingElement);

  if (!rootElement) {
    console.error('❌ Root element not found!');
    
    // Create fallback UI
    document.body.innerHTML = `
      <div style="
        display: flex; 
        align-items: center; 
        justify-content: center; 
        min-height: 100vh; 
        background: #f9fafb;
        font-family: Inter, system-ui, sans-serif;
        padding: 20px;
      ">
        <div style="text-align: center; max-width: 400px;">
          <h1 style="color: #dc2626; margin-bottom: 16px;">Application Error</h1>
          <p style="color: #374151; margin-bottom: 24px;">
            The application root element could not be found. Please refresh the page or contact support.
          </p>
          <button onclick="window.location.reload()" style="
            background: #dc2626; 
            color: white; 
            border: none; 
            padding: 12px 24px; 
            border-radius: 8px; 
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
          ">
            Reload Page
          </button>
        </div>
      </div>
    `;
    return;
  }

  try {
    console.log('🎯 Creating React root...');
    
    const root = createRoot(rootElement);
    
    console.log('🎨 Rendering App component...');
    
    root.render(<App />);
    
    console.log('✅ App rendered successfully!');
    
    // Hide loading screen after successful render
    setTimeout(() => {
      if (loadingElement) {
        loadingElement.style.display = 'none';
        document.body.classList.add('app-loaded');
        console.log('🎉 Loading screen hidden');
      }
    }, 500);
    
  } catch (error) {
    console.error('❌ Failed to render app:', error);
    
    // Show error in loading screen
    if (loadingElement) {
      loadingElement.innerHTML = `
        <div style="text-align: center; padding: 40px; font-family: Inter, sans-serif;">
          <h2 style="color: #dc2626; margin-bottom: 16px;">Rendering Error</h2>
          <p style="color: #374151; margin-bottom: 16px; font-size: 14px;">
            The application failed to start. Please try reloading the page.
          </p>
          <button onclick="window.location.reload()" style="
            background: #dc2626; 
            color: white; 
            border: none; 
            padding: 10px 20px; 
            border-radius: 6px; 
            cursor: pointer;
            font-size: 14px;
          ">
            Reload Page
          </button>
          ${process.env.NODE_ENV === 'development' ? `
            <details style="margin-top: 20px; text-align: left;">
              <summary style="cursor: pointer; color: #6b7280;">Show Error Details</summary>
              <pre style="
                background: #f3f4f6; 
                padding: 12px; 
                border-radius: 4px; 
                font-size: 12px;
                overflow: auto;
                color: #374151;
                margin-top: 8px;
              ">${error.stack || error.message}</pre>
            </details>
          ` : ''}
        </div>
      `;
    }
  }
}

// Initialize immediately or wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}