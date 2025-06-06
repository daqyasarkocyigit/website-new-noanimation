import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = lazy(() => import('./App.tsx'));

const rootElement = document.getElementById('root');

if (!rootElement) {
  const errorDiv = document.createElement('div');
  errorDiv.style.padding = '20px';
  errorDiv.style.textAlign = 'center';
  errorDiv.innerHTML = '<h1>Error</h1><p>Unable to load application. Please try refreshing the page.</p>';
  document.body.appendChild(errorDiv);
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <Suspense fallback={
        <div className="h-screen flex items-center justify-center">
          <div className="animate-pulse text-brand-red-600 text-xl">Loading...</div>
        </div>
      }>
        <App />
      </Suspense>
    </StrictMode>
  );
}