import { FC, useMemo, useState } from 'react'
import { ThemesContext } from './';
import { darkTheme, lightTheme } from '@/themes';
import { createTheme } from '@mui/material';


interface Props {
    children: JSX.Element | JSX.Element[];
}
export const ThemesProviderColorMode: FC<Props> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    // const colorMode = useMemo(() => ({
    //     toggleColorMode: () => {
    //         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    //     },
    // }), []);
    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }
    // const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);
    const theme = mode === 'light' ? lightTheme : darkTheme;

    return (
        <ThemesContext.Provider value={{ toggleColorMode, theme }}>
            {children}
        </ThemesContext.Provider>
    )
}
