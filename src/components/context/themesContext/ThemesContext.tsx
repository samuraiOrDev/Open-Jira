import { Theme } from '@mui/material';
import { createContext } from 'react';
interface TypeThemesContext {
    toggleColorMode: () => void
    theme: Theme;
}

export const ThemesContext = createContext({} as TypeThemesContext);