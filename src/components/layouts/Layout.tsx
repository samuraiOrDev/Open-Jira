import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import Head from 'next/head'
import React, { FC, useContext } from 'react'
import { NavBar } from '../ui';
import { darkTheme } from '@/themes';
import { ThemesContext, ThemesProviderColorMode } from '../context';


interface Props {
    title?: string;
    children: JSX.Element | JSX.Element[];
}
export const Layout: FC<Props> = ({ title = 'Open Jira App', children }) => {
    const { theme } = useContext(ThemesContext);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ flexFlow: 1 }}>
                <Head>
                    <title>{title}</title>
                </Head>

                {/* NavBar */}
                <NavBar />

                {/* SideBar */}

                <Box sx={{ padding: '10px 10px' }}>
                    {children}
                </Box>
            </Box>
        </ThemeProvider>
    )
}
