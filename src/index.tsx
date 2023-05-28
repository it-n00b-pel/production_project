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

import {createRoot} from 'react-dom/client';
import App from './app/App';
import React from 'react';
import {ThemeProvider} from 'app/providers/ThemeProviders';
import {BrowserRouter} from 'react-router-dom';



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
);