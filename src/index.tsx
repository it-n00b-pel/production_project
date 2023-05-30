// import {render} from 'react-dom';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom';
//
// render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>,
//     document.getElementById('root'),
// );

import { createRoot } from 'react-dom/client';
import React from 'react';
import { ThemeProvider } from 'app/providers/ThemeProviders';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './shared/config/i18n/i18n';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
