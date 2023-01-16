import { createContext, ReactNode, useContext, useState } from 'react';
import { useRouter } from 'next/router';

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

  const router = useRouter();

  function onToggleLanguage() {
    if (CONSTS.LANGUAGES.PT === currentLanguage) {
      setCurrentLanguage(CONSTS.LANGUAGES.EN);
      router.push(router.asPath, router.asPath, { locale: 'en' });
    } else {
      setCurrentLanguage(CONSTS.LANGUAGES.PT);
      router.push(router.asPath, router.asPath, { locale: 'pt_BR' });
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
