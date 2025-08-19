import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Initialize app
const rootElement = document.getElementById('root');

if (rootElement) {
  // Remove loading placeholder
  const loadingElement = document.querySelector('.loading');
  if (loadingElement) {
    loadingElement.remove();
  }

  const root = createRoot(rootElement);
  
  // Simple error boundary
  const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
    try {
      return <>{children}</>;
    } catch (error) {
      console.error('App error:', error);
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
  };

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}