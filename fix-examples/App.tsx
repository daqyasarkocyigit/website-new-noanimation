import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        {/* Your app content */}
      </div>
    </ErrorBoundary>
  );
}

export default App;