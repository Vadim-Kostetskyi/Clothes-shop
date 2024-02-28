import { useState, useEffect, useCallback } from 'react';

export const useGetViewportWidth = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    const isMobileWidth = window.innerWidth <= 960;
    setIsMobile(isMobileWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
