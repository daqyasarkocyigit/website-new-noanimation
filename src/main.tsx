import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Simple error boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode }, 
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Application error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-brand-red-600 text-white rounded-lg hover:bg-brand-red-700 transition-colors"
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

// Initialize app
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}