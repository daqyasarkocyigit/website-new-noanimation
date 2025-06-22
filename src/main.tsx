import React, { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Lazy load the main App component with preload
const App = lazy(() => 
  import('./App.tsx').then(module => {
    // Preload critical components
    import('./components/home/Hero');
    import('./components/layout/Navbar');
    import('./components/layout/Footer');
    return module;
  })
);

// Optimized loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center max-w-md mx-auto p-6">
      {/* Logo skeleton */}
      <div className="w-16 h-16 bg-gray-200 rounded-xl mx-auto mb-4 animate-pulse" />
      
      {/* Loading spinner */}
      <div className="w-8 h-8 border-2 border-gray-300 border-t-brand-red-600 rounded-full animate-spin mx-auto mb-4" />
      
      {/* Text skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded animate-pulse" />
        <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
      </div>
      
      {/* Fallback text */}
      <div className="mt-4">
        <div className="text-brand-red-600 text-lg font-medium">Loading DAQ Consulting...</div>
        <div className="text-gray-500 text-sm mt-1">AI & Data Engineering Experts</div>
      </div>
    </div>
  </div>
);

// Enhanced error boundary with retry functionality
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error; retryCount: number }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Application error:', error, errorInfo);
    
    // Report to analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.toString(),
        fatal: true
      });
    }
  }

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: undefined,
      retryCount: prevState.retryCount + 1
    }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center max-w-md mx-auto">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try again.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full px-6 py-3 bg-brand-red-600 text-white rounded-lg hover:bg-brand-red-700 transition-colors font-medium"
                disabled={this.state.retryCount >= 3}
              >
                {this.state.retryCount >= 3 ? 'Max retries reached' : 'Try Again'}
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Refresh Page
              </button>
            </div>
            
            {this.state.error && (
              <details className="mt-4 text-left">
                <summary className="text-sm text-gray-500 cursor-pointer">Error details</summary>
                <pre className="text-xs text-gray-400 mt-2 p-2 bg-gray-100 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Performance monitoring
const reportWebVitals = (metric: any) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// Initialize app
const initializeApp = async () => {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'min-h-screen flex items-center justify-center bg-gray-50 p-4';
    errorDiv.innerHTML = `
      <div class="text-center max-w-md mx-auto">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">Unable to Load Application</h1>
        <p class="text-gray-600 mb-4">Please try refreshing the page or contact support if the problem persists.</p>
        <button onclick="window.location.reload()" class="px-6 py-3 bg-brand-red-600 text-white rounded-lg hover:bg-brand-red-700 transition-colors">
          Refresh Page
        </button>
      </div>
    `;
    document.body.appendChild(errorDiv);
    return;
  }

  // Create root and render
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </StrictMode>
  );

  // Report web vitals
  if (import.meta.env.PROD) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    });
  }
};

// Enhanced service worker registration
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', { 
        scope: '/',
        updateViaCache: 'none'
      });
      
      console.log('SW registered: ', registration);
      
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content available
              if (confirm('New version available! Refresh to update?')) {
                window.location.reload();
              }
            }
          });
        }
      });
      
    } catch (error) {
      console.log('SW registration failed: ', error);
    }
  }
};

// Preload critical resources
const preloadCriticalResources = () => {
  const criticalResources = [
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' },
    { href: 'https://i.imgur.com/mCWcjTw.png', as: 'image' }
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = resource.as;
    link.href = resource.href;
    if (resource.as === 'style') {
      link.onload = () => {
        link.rel = 'stylesheet';
      };
    }
    document.head.appendChild(link);
  });
};

// Resource hints for better performance
const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: 'https://images.pexels.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
    document.head.appendChild(link);
  });
};

// Initialize everything
const bootstrap = async () => {
  // Add resource hints immediately
  addResourceHints();
  
  // Preload critical resources
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalResources);
  } else {
    preloadCriticalResources();
  }
  
  // Register service worker
  window.addEventListener('load', registerServiceWorker);
  
  // Initialize app
  await initializeApp();
};

// Start the application
bootstrap().catch(error => {
  console.error('Failed to bootstrap application:', error);
  
  // Fallback error display
  document.body.innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div class="text-center max-w-md mx-auto">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">Failed to Load</h1>
        <p class="text-gray-600 mb-4">The application failed to start. Please refresh the page.</p>
        <button onclick="window.location.reload()" class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          Refresh Page
        </button>
      </div>
    </div>
  `;
});