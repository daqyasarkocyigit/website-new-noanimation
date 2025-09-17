import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

console.log('🚀 Application starting...');

// Simple error boundary for top level
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Application error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '40px', 
          textAlign: 'center',
          fontFamily: 'Inter, system-ui, sans-serif',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div>
            <h1 style={{ color: '#ef4444', marginBottom: '16px' }}>Something went wrong</h1>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>Please refresh the page to try again.</p>
            <button 
              onClick={() => window.location.reload()}
              style={{
                padding: '12px 24px',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function initializeApp() {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('❌ Root element not found');
    return;
  }

  try {
    // Clear any existing content
    rootElement.innerHTML = '';
    
    const root = createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
    
    console.log('✅ App mounted successfully');
    
  } catch (error) {
    console.error('❌ Failed to mount app:', error);
    
    // Fallback UI
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 40px; text-align: center; font-family: Inter, system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
          <div>
            <h1 style="color: #ef4444; margin-bottom: 16px;">Application Error</h1>
            <p style="color: #6b7280; margin-bottom: 24px;">The application failed to load properly.</p>
            <button onclick="window.location.reload()" style="
              background: #ef4444; 
              color: white; 
              border: none; 
              padding: 12px 24px; 
              border-radius: 6px; 
              cursor: pointer;
              font-family: inherit;
            ">Reload Page</button>
          </div>
        </div>
      `;
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Global error handlers
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error || e.message);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});