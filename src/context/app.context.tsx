import {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';

// Utils
import { CONSTS } from '../utils';

// Interfaces
interface IAppContextType {
  currentLanguage: string;
  onToggleLanguage: () => void;
}

interface IAppProviderProps {
  children: ReactNode;
}

const AppContext = createContext({} as IAppContextType);

export function AppProvider({ children }: IAppProviderProps) {
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

  useLayoutEffect(() => {
    if (router.locale === 'pt_BR') {
      setCurrentLanguage(CONSTS.LANGUAGES.PT);
    } else {
      setCurrentLanguage(CONSTS.LANGUAGES.EN);
    }
  }, []);

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
