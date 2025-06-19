import React, { useState, useEffect } from 'react';
import MobileOptimizedVisual from './MobileOptimizedVisual';
import DataEngineeringVisual from './DataEngineeringVisual';
import DataVisualizationVisual from './DataVisualizationVisual';
import BusinessIntelligenceVisual from './BusinessIntelligenceVisual';
import AIEngineeringVisual from './AIEngineeringVisual';
import CloudModernizationVisual from './CloudModernizationVisual';

interface ResponsiveServiceVisualProps {
  type: 'data-engineering' | 'data-visualization' | 'business-intelligence' | 'ai-engineering' | 'cloud-modernization';
}

const ResponsiveServiceVisual: React.FC<ResponsiveServiceVisualProps> = ({ type }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isMobileWidth = width < 768;
      
      // Check for low-end device indicators
      const isLowEnd = 
        navigator.hardwareConcurrency <= 2 || 
        navigator.deviceMemory <= 2 ||
        /Android.*Chrome\/[0-5]/.test(navigator.userAgent) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setIsMobile(isMobileWidth);
      setIsLowEndDevice(isLowEnd);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Use mobile-optimized visual for mobile devices or low-end devices
  if (isMobile || isLowEndDevice) {
    return <MobileOptimizedVisual type={type} />;
  }

  // Use full-featured visuals for desktop
  switch (type) {
    case 'data-engineering':
      return <DataEngineeringVisual />;
    case 'data-visualization':
      return <DataVisualizationVisual />;
    case 'business-intelligence':
      return <BusinessIntelligenceVisual />;
    case 'ai-engineering':
      return <AIEngineeringVisual />;
    case 'cloud-modernization':
      return <CloudModernizationVisual />;
    default:
      return <MobileOptimizedVisual type={type} />;
  }
};

export default ResponsiveServiceVisual;