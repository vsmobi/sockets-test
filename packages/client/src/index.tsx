import React from 'react';
import ReactDOM from 'react-dom/client';

import 'src/app/global.css';
import { App, reportWebVitals } from 'src/app';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

reportWebVitals();
