import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Sidebar from './sidebar/Sidebar';

import { WebHelmet } from './WebHelmet';

import './Layout.scss';

const theme = createMuiTheme({
    palette: {
      primary: { main: 'rgba(39, 143, 187, 0.85)' }, // Purple and green play nicely together.
      secondary: { main: 'rgba(162, 29, 167, 0.85)' }, // This is just green.A700 as hex.
    },
    typography: {
        useNextVariants: true,
    },
});

const Layout = props => {
    const { children } = props;

    return (
        <MuiThemeProvider theme={theme}>
            <WebHelmet />
            <Sidebar />
            <main className='content fade-in'>
                {children}
            </main>
        </MuiThemeProvider>
    );
}

export { Layout };
