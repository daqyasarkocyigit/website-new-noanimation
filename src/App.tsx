import React, { memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

// Import pages directly for faster loading
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Talent from './pages/Talent';
import Privacy from './pages/Privacy';
import CookiePolicy from './pages/CookiePolicy';
import Terms from './pages/Terms';

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
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <RouteErrorBoundary>
                <Home />
              </RouteErrorBoundary>
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default memo(App);