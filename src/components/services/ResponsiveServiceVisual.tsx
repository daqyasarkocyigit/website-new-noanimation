import React, { useState, useEffect, memo, useMemo } from 'react';
import MobileOptimizedVisual from './MobileOptimizedVisual';

// Lazy load desktop visuals only when needed with better error handling
const loadDesktopVisual = (type: string) => {
  switch (type) {
    case 'data-engineering':
      return import('./DataEngineeringVisual').catch(() => ({ default: () => <MobileOptimizedVisual type="data-engineering" /> }));
    case 'data-visualization':
      return import('./DataVisualizationVisual').catch(() => ({ default: () => <MobileOptimizedVisual type="data-visualization" /> }));
    case 'business-intelligence':
      return import('./BusinessIntelligenceVisual').catch(() => ({ default: () => <MobileOptimizedVisual type="business-intelligence" /> }));
    case 'ai-engineering':
      return import('./AIEngineeringVisual').catch(() => ({ default: () => <MobileOptimizedVisual type="ai-engineering" /> }));
    case 'cloud-modernization':
      return import('./CloudModernizationVisual').catch(() => ({ default: () => <MobileOptimizedVisual type="cloud-modernization" /> }));
    default:
      return Promise.resolve({ default: () => <MobileOptimizedVisual type={type as any} /> });
  }
};

interface ResponsiveServiceVisualProps {
  type: 'data-engineering' | 'data-visualization' | 'business-intelligence' | 'ai-engineering' | 'cloud-modernization';
}

const ResponsiveServiceVisual: React.FC<ResponsiveServiceVisualProps> = memo(({ type }) => {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile for faster initial render
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [DesktopComponent, setDesktopComponent] = useState<React.ComponentType | null>(null);

  // Memoize device detection
  const deviceInfo = useMemo(() => {
    if (typeof window === 'undefined') return { isMobile: true, isLowEnd: false };
    
    const width = window.innerWidth;
    const isMobileWidth = width < 640; // Changed from 768 to 640 for more consistency
    
    // Enhanced low-end device detection
    const isLowEnd = 
      navigator.hardwareConcurrency <= 2 || 
      (navigator as any).deviceMemory <= 2 ||
      /Android.*Chrome\/[0-4]/.test(navigator.userAgent) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      navigator.connection?.effectiveType === 'slow-2g' ||
      navigator.connection?.effectiveType === '2g';

    return { isMobile: isMobileWidth, isLowEnd };
  }, []);

  useEffect(() => {
    const checkDevice = () => {
      const { isMobile: mobile, isLowEnd } = deviceInfo;
      setIsMobile(mobile);
      setIsLowEndDevice(isLowEnd);
    };

    checkDevice();
    
    const debouncedResize = debounce(checkDevice, 250);
    window.addEventListener('resize', debouncedResize);
    
    return () => window.removeEventListener('resize', debouncedResize);
  }, [deviceInfo]);

  // Load desktop component only when needed
  useEffect(() => {
    if (!isLowEndDevice && !DesktopComponent) { // Remove mobile check to always load desktop component
      // Use requestIdleCallback for non-critical loading
      const loadComponent = () => {
        loadDesktopVisual(type).then(module => {
          setDesktopComponent(() => module.default);
        });
      };

      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadComponent, { timeout: 2000 });
      } else {
        setTimeout(loadComponent, 100);
      }
    }
  }, [isLowEndDevice, type, DesktopComponent]); // Remove isMobile dependency

  // Only use mobile-optimized visual for very low-end devices
  if (isLowEndDevice) {
    return <MobileOptimizedVisual type={type} />;
  }

  // Use desktop component if loaded, otherwise fallback to mobile
  if (DesktopComponent) {
    return (
      <React.Suspense fallback={<MobileOptimizedVisual type={type} />}>
        <DesktopComponent />
      </React.Suspense>
    );
  }

  return <MobileOptimizedVisual type={type} />;
});

// Debounce utility
function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  }) as T;
}

ResponsiveServiceVisual.displayName = 'ResponsiveServiceVisual';

export default ResponsiveServiceVisual;