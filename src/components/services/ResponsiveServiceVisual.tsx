import React, { useState, useEffect, memo } from 'react';
import MobileOptimizedVisual from './MobileOptimizedVisual';

// Lazy load desktop visuals only when needed
const DataEngineeringVisual = React.lazy(() => import('./DataEngineeringVisual'));
const DataVisualizationVisual = React.lazy(() => import('./DataVisualizationVisual'));
const BusinessIntelligenceVisual = React.lazy(() => import('./BusinessIntelligenceVisual'));
const AIEngineeringVisual = React.lazy(() => import('./AIEngineeringVisual'));
const CloudModernizationVisual = React.lazy(() => import('./CloudModernizationVisual'));

interface ResponsiveServiceVisualProps {
  type: 'data-engineering' | 'data-visualization' | 'business-intelligence' | 'ai-engineering' | 'cloud-modernization';
}

const ResponsiveServiceVisual: React.FC<ResponsiveServiceVisualProps> = memo(({ type }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isMobileWidth = width < 768;
      
      // Check for low-end device indicators
      const isLowEnd = 
        navigator.hardwareConcurrency <= 2 || 
        (navigator as any).deviceMemory <= 2 ||
        /Android.*Chrome\/[0-5]/.test(navigator.userAgent) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setIsMobile(isMobileWidth);
      setIsLowEndDevice(isLowEnd);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Use full-featured visuals for desktop with lazy loading
  const VisualComponent = React.useMemo(() => {
    // Use mobile-optimized visual for mobile devices or low-end devices
    if (isMobile || isLowEndDevice) {
      return () => <MobileOptimizedVisual type={type} />;
    }

    switch (type) {
      case 'data-engineering':
        return DataEngineeringVisual;
      case 'data-visualization':
        return DataVisualizationVisual;
      case 'business-intelligence':
        return BusinessIntelligenceVisual;
      case 'ai-engineering':
        return AIEngineeringVisual;
      case 'cloud-modernization':
        return CloudModernizationVisual;
      default:
        return () => <MobileOptimizedVisual type={type} />;
    }
  }, [type, isMobile, isLowEndDevice]);

  // For mobile/low-end devices, render directly without Suspense
  if (isMobile || isLowEndDevice) {
    return <VisualComponent />;
  }

  return (
    <React.Suspense fallback={<MobileOptimizedVisual type={type} />}>
      <VisualComponent />
    </React.Suspense>
  );
});

ResponsiveServiceVisual.displayName = 'ResponsiveServiceVisual';

export default ResponsiveServiceVisual;