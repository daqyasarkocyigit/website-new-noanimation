import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Enhanced debug logging
console.log('🚀 Main.tsx starting...', {
  reactVersion: React.version,
  nodeEnv: process.env.NODE_ENV,
  timestamp: new Date().toISOString()
});

// Enhanced error handling and root mounting
function initializeApp() {
  const rootElement = document.getElementById('root');
  const loadingElement = document.getElementById('app-loading');
  
  console.log('🔍 DOM Check:', {
    rootFound: !!rootElement,
    loadingFound: !!loadingElement,
    documentReady: document.readyState,
    bodyChildren: document.body?.children?.length || 0
  });

  if (!rootElement) {
    console.error('❌ Root element not found!');
    console.log('Available elements:', Array.from(document.body.querySelectorAll('[id]')).map(el => el.id));
    
    // Create fallback UI
    document.body.innerHTML = `
      <div style="
        display: flex; 
        align-items: center; 
        justify-content: center; 
        min-height: 100vh; 
        background: #ffffff;
        font-family: Inter, system-ui, sans-serif;
        padding: 20px;
      ">
        <div style="text-align: center; max-width: 400px;">
          <h1 style="color: #FF3333; margin-bottom: 16px;">Application Error</h1>
          <p style="color: #374151; margin-bottom: 24px;">
            The application root element could not be found. Please refresh the page or contact support.
          </p>
          <button onclick="window.location.reload()" style="
            background: #FF3333; 
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
          <div style="margin-top: 20px; font-size: 12px; color: #666;">
            Debug: ${document.readyState} - ${new Date().toISOString()}
          </div>
        </div>
      </div>
    `;
    return;
  }

  try {
    console.log('🎯 Creating React root...');
    
    const root = createRoot(rootElement);
    
    console.log('🎨 Rendering App component...');
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log('✅ App rendered successfully!');
    
    // Hide loading screen after successful render
    setTimeout(() => {
      if (loadingElement) {
        loadingElement.style.display = 'none';
        document.body.classList.add('app-loaded');
        console.log('🎉 Loading screen hidden');
      }
    }, 100); // Faster loading screen removal
    
  } catch (error) {
    console.error('❌ Failed to render app:', error);
    console.error('Error stack:', error.stack);
    
    // Show error in loading screen
    if (loadingElement) {
      loadingElement.innerHTML = `
        <div style="text-align: center; padding: 40px; font-family: Inter, sans-serif; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin: 20px;">
          <h2 style="color: #FF3333; margin-bottom: 16px;">Rendering Error</h2>
          <p style="color: #374151; margin-bottom: 16px; font-size: 14px;">
            The application failed to start. Please try reloading the page.
          </p>
          <p style="color: #666; margin-bottom: 16px; font-size: 12px;">
            Error: ${error.message}
          </p>
          <button onclick="window.location.reload()" style="
            background: #FF3333; 
            color: white; 
            border: none; 
            padding: 10px 20px; 
            border-radius: 6px; 
            cursor: pointer;
            font-size: 14px;
          ">
            Reload Page
          </button>
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
        </div>
      `;
    } else {
      // Fallback if even loading element doesn't exist
      document.body.innerHTML = `
        <div style="
          display: flex; 
          align-items: center; 
          justify-content: center; 
          min-height: 100vh; 
          background: #ffffff;
          font-family: Inter, system-ui, sans-serif;
          padding: 20px;
        ">
          <div style="text-align: center; max-width: 500px; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h1 style="color: #FF3333; margin-bottom: 16px;">Critical Error</h1>
            <p style="color: #374151; margin-bottom: 16px;">
              ${error.message}
            </p>
            <button onclick="window.location.reload()" style="
              background: #FF3333; 
              color: white; 
              border: none; 
              padding: 12px 24px; 
              border-radius: 8px; 
              cursor: pointer;
              font-size: 16px;
              margin-right: 10px;
            ">
              Reload Page
            </button>
            <button onclick="window.location.href='/'" style="
              background: transparent; 
              color: #FF3333; 
              border: 2px solid #FF3333; 
              padding: 10px 22px; 
              border-radius: 8px; 
              cursor: pointer;
              font-size: 16px;
            ">
              Go Home
            </button>
          </div>
        </div>
      `;
    }
  }
}

// Global error handling for uncaught errors
window.addEventListener('error', (event) => {
  console.error('🚨 Global error:', event.error);
  console.error('Error details:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error
  });
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 Unhandled promise rejection:', event.reason);
  console.error('Promise:', event.promise);
});

// Initialize immediately or wait for DOM
if (document.readyState === 'loading') {
  console.log('⏳ Waiting for DOM to load...');
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  console.log('✅ DOM already ready, initializing...');
  initializeApp();