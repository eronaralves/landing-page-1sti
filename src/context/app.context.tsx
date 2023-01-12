import { createContext, ReactNode, useContext, useState } from 'react';

// Utils
import { CONSTS } from '../utils';

// Interfaces
interface LanguageContextType {
  currentLanguage: string;
  onToggleLanguage: () => void;
}

interface LaguageProviderProps {
  children: ReactNode;
}

const AppContext = createContext({} as LanguageContextType);

export function LanguageProvider({ children }: LaguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState('PT');

  function onToggleLanguage() {
    if (CONSTS.LANGUAGES.PT === currentLanguage) {
      setCurrentLanguage(CONSTS.LANGUAGES.EN);
    } else {
      setCurrentLanguage(CONSTS.LANGUAGES.PT);
    }
  }

  return (
    <AppContext.Provider
      value={{
        currentLanguage,
        onToggleLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  const { currentLanguage, onToggleLanguage } = context;

  return {
    currentLanguage,
    onToggleLanguage,
  };
}
