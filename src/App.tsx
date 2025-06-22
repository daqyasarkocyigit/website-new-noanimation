import React, { lazy, Suspense, memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import CookieConsent from './components/utils/CookieConsent';

// Lazy load all pages with preloading strategy
const Home = lazy(() => 
  import('./pages/Home').then(module => {
    // Preload likely next pages
    import('./pages/Services');
    import('./pages/About');
    return module;
  })
);

const Services = lazy(() => 
  import('./pages/Services').then(module => {
    // Preload service visuals
    import('./components/services/ResponsiveServiceVisual');
    return module;
  })
);

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Talent = lazy(() => import('./pages/Talent'));

// Lazy load legal pages (less priority)
const Privacy = lazy(() => import('./pages/Privacy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const Terms = lazy(() => import('./pages/Terms'));

// Optimized page loading component with skeleton
const PageLoader = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center max-w-md mx-auto p-6">
      {/* Skeleton loader */}
      <div className="space-y-4 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded" />
          <div className="h-3 bg-gray-200 rounded w-5/6 mx-auto" />
        </div>
      </div>
      
      {/* Loading indicator */}
      <div className="mt-6">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-brand-red-600 rounded-full animate-spin mx-auto" />
        <p className="text-sm text-gray-500 mt-2">Loading page...</p>
      </div>
    </div>
  </div>
));

PageLoader.displayName = 'PageLoader';

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

// Memoized route wrapper
const RouteWrapper = memo(({ children }: { children: React.ReactNode }) => (
  <RouteErrorBoundary>
    <Suspense fallback={<PageLoader />}>
      {children}
    </Suspense>
  </RouteErrorBoundary>
));

RouteWrapper.displayName = 'RouteWrapper';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <RouteWrapper>
                <Home />
              </RouteWrapper>
            } />
            <Route path="/services" element={
              <RouteWrapper>
                <Services />
              </RouteWrapper>
            } />
            <Route path="/about" element={
              <RouteWrapper>
                <About />
              </RouteWrapper>
            } />
            <Route path="/contact" element={
              <RouteWrapper>
                <Contact />
              </RouteWrapper>
            } />
            <Route path="/talent" element={
              <RouteWrapper>
                <Talent />
              </RouteWrapper>
            } />
            <Route path="/privacy" element={
              <RouteWrapper>
                <Privacy />
              </RouteWrapper>
            } />
            <Route path="/cookie-policy" element={
              <RouteWrapper>
                <CookiePolicy />
              </RouteWrapper>
            } />
            <Route path="/terms" element={
              <RouteWrapper>
                <Terms />
              </RouteWrapper>
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
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}

export default memo(App);