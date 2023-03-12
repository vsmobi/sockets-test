import React from 'react';

import { AppConfigContextProvider, SOCKET_URL } from 'src/shared';
import { DevicesPage } from 'src/pages';

export const App = () => {
    if (!SOCKET_URL) {
        return <div>SOCKET_URL is not defined</div>;
    }

    return (
        <AppConfigContextProvider defaultValue={{ url: SOCKET_URL }}>
            <DevicesPage/>
        </AppConfigContextProvider>
    );
};
