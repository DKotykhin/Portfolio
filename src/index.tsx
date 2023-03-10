import React from 'react';
import ReactDOM from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import App from './App';

import './index.scss';

const theme = createTheme({
    palette: {
        primary: {
            light: '#1c1d24',
            main: '#131416',
            dark: '#0e0f10',
        },        
    },
    typography: {
        fontFamily: [
            "-apple-system", "BlinkMacSystemFont", "Nunito", "Roboto", "Oxygen",
            'sans-serif'
        ].join(','),
    }
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

