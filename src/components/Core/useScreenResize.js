import { useEffect, useState } from 'react';

export function UseResizeScreenLayout() {
  const [isScreenWide, setIsScreenWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsScreenWide(true);
      } else {
        setIsScreenWide(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isScreenWide;
}

export function UseResizeScreenLayout640() {
  const [isScreenWide, setIsScreenWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsScreenWide(true);
      } else {
        setIsScreenWide(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isScreenWide;
}

export function UseResizeScreenLayout1024down() {
  const [isScreenWide, setIsScreenWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsScreenWide(true);
      } else {
        setIsScreenWide(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isScreenWide;
}

export function ScreeResizeForViewMoreItems() {
  const [isScreenWide, setIsScreenWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsScreenWide(true);
      } else {
        setIsScreenWide(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isScreenWide;
}
