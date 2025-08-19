import React, { memo, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/Home';

// Lazy load non-critical pages
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Talent = lazy(() => import('./pages/Talent'));
const Privacy = lazy(() => import('./pages/Privacy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const Terms = lazy(() => import('./pages/Terms'));

// Simple loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-gray-200 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Error boundary for route-level errors
class RouteErrorBoundary extends React.Component<
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
    console.error('Route error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Error</h1>
            <p className="text-gray-600 mb-6">
              This page encountered an error. Please try navigating to another page.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-brand-red-600 text-white rounded-lg hover:bg-brand-red-700 transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <Home />
            } />
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
            {/* 404 Route */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <div className="text-center max-w-md mx-auto">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                  <p className="text-gray-600 mb-6">Page not found</p>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-3 bg-brand-red-600 text-white rounded-lg hover:bg-brand-red-700 transition-colors"
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
  );
}

export default memo(App);