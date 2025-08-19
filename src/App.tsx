import React, { memo, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/Home';

// Debug logging
console.log('📱 App.tsx loading...');

// Lazy load non-critical pages
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Talent = lazy(() => import('./pages/Talent'));
const Privacy = lazy(() => import('./pages/Privacy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const Terms = lazy(() => import('./pages/Terms'));

// Enhanced loading component with better UX
const PageLoader = () => {
  console.log('⏳ PageLoader rendering...');
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-12 h-12 border-3 border-gray-200 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-xl font-bold text-gray-900 mb-2">DAQ Consulting</div>
        <p className="text-gray-500 text-sm">Loading page...</p>
      </div>
    </div>
  );
};

// Enhanced error boundary for route-level errors
class RouteErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('🚨 Route error boundary triggered:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🚨 Route error details:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Error</h1>
            <p className="text-gray-600 mb-6">
              This page encountered an error. Please try navigating to another page or refreshing.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.href = '/'}
                className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Go Home
              </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reload Page
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Show Error Details
                </summary>
                <pre className="mt-2 p-3 bg-gray-100 rounded text-xs overflow-auto">
                  {this.state.error.stack}
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

// Global error boundary for the entire app
class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('💥 App error boundary triggered:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('💥 App error details:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Application Error</h1>
            <p className="text-gray-600 mb-6">
              The application encountered a critical error and cannot continue. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Reload Application
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Show Technical Details
                </summary>
                <pre className="mt-2 p-3 bg-gray-100 rounded text-xs overflow-auto">
                  {this.state.error.stack}
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

function App() {
  console.log('🎯 App component rendering...');

  useEffect(() => {
    console.log('✅ App component mounted successfully!');
    
    // Report successful app load
    if (typeof window !== 'undefined') {
      console.log('🌐 Window object available, app fully loaded');
    }
  }, []);

  return (
    <AppErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={
                  <RouteErrorBoundary>
                    <Services />
                  </RouteErrorBoundary>
                } />
                <Route path="/about" element={
                  <RouteErrorBoundary>
                    <About />
                  </RouteErrorBoundary>
                } />
                <Route path="/contact" element={
                  <RouteErrorBoundary>
                    <Contact />
                  </RouteErrorBoundary>
                } />
                <Route path="/talent" element={
                  <RouteErrorBoundary>
                    <Talent />
                  </RouteErrorBoundary>
                } />
                <Route path="/privacy" element={
                  <RouteErrorBoundary>
                    <Privacy />
                  </RouteErrorBoundary>
                } />
                <Route path="/cookie-policy" element={
                  <RouteErrorBoundary>
                    <CookiePolicy />
                  </RouteErrorBoundary>
                } />
                <Route path="/terms" element={
                  <RouteErrorBoundary>
                    <Terms />
                  </RouteErrorBoundary>
                } />
                {/* Enhanced 404 Route */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                    <div className="text-center max-w-md mx-auto">
                      <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                      <p className="text-gray-600 mb-8">
                        The page you're looking for doesn't exist or has been moved.
                      </p>
                      <button
                        onClick={() => window.location.href = '/'}
                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                      >
                        Go Home
                      </button>
                    </div>
                  </div>
                } />
              </Routes>
            </main>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </AppErrorBoundary>
  );
}

console.log('📤 App component defined, exporting...');

export default memo(App);