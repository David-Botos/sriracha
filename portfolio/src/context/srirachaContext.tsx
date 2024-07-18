'use client'
// SrirachaContext.tsx
import React, { createContext, useState, useContext } from 'react';

type SrirachaContextType = {
  isOpen: boolean;
  toggleBottle: () => void;
};

const SrirachaContext = createContext<SrirachaContextType | undefined>(undefined);

export const SrirachaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBottle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <SrirachaContext.Provider value={{ isOpen, toggleBottle }}>
      {children}
    </SrirachaContext.Provider>
  );
};

export const useSriracha = () => {
  const context = useContext(SrirachaContext);
  if (context === undefined) {
    throw new Error('useSriracha must be used within a SrirachaProvider');
  }
  return context;
};