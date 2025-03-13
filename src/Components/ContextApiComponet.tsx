import React, { createContext, useState, useEffect, useCallback } from 'react';

// Define the type for the context value
interface MobileContextType {
  isMobile: boolean;
}

// Create the context with a default value
const MobileContext = createContext<MobileContextType | undefined>(undefined);

export const ContextApiComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [checkIsMobile]);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileContext;
