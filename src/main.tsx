import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = lazy(() => import('./App.tsx'));

createRoot(document.getElementById('root')!).render(
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