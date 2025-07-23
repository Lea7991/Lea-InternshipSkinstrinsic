import { useEffect, useState } from 'react';

const useResponsiveRadius = () => {
  const [radius, setRadius] = useState(getRadius(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setRadius(getRadius(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return radius;
};

const getRadius = (width) => {
  if (width < 600) return 100;      // Phone
  if (width < 1024) return 160;     // Tablet
  return 200;                       // Desktop
};

export default useResponsiveRadius;
