import { FC, createContext, useContext, useState } from 'react';

import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';


import { useTheme } from '@mui/material';


import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { ThemesContext } from '../context';


interface Props { }
export const NavBar: FC<Props> = () => {
    const theme = useTheme();
    const { toggleColorMode } = useContext(ThemesContext);
    return (
        <>
            <AppBar position='sticky' elevation={0} >
                <Toolbar sx={{ flexFlow: 1 }}>
                    <IconButton size='large' edge='start'>
                        <MenuOutlinedIcon />
                    </IconButton>
                    <Typography variant='h6'>Open Jira</Typography>
                    <Box sx={{ flexGrow: 1 }} />

                    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

