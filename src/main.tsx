import React, { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = lazy(() => import('./App.tsx'));

// Loading component with better UX
const LoadingFallback = () => (
  <div className="h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="loading-spinner w-8 h-8 mx-auto mb-4" />
      <div className="text-brand-red-600 text-lg font-medium">Loading DAQ Consulting...</div>
      <div className="text-gray-500 text-sm mt-2">AI & Data Engineering Experts</div>
    </div>
  </div>
);

// Error boundary component
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
        <div className="h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
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

const rootElement = document.getElementById('root');

if (!rootElement) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'h-screen flex items-center justify-center bg-gray-50 p-4';
  errorDiv.innerHTML = `
    <div class="text-center">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Unable to Load Application</h1>
      <p class="text-gray-600">Please try refreshing the page or contact support if the problem persists.</p>
    </div>
  `;
  document.body.appendChild(errorDiv);
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </StrictMode>
  );
}

// Register service worker for better performance (optional)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}