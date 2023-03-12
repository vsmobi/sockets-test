import React, { PropsWithChildren } from 'react';
import { ReadyState } from 'react-use-websocket';

import { Loader } from 'src/shared';

type SocketStateWrapperProps = PropsWithChildren<{
    readyState: ReadyState
}>;

export const SocketStateWrapper = ({
    readyState,
    children
}: SocketStateWrapperProps) => {
    switch (readyState) {
        case ReadyState.CLOSED:
        case ReadyState.OPEN:
            return <>{children}</>;
        case ReadyState.CONNECTING: {
            return <Loader isLoading/>;
        }
        case ReadyState.UNINSTANTIATED:
            return <div>Socket error</div>;
        default:
            return null;
    }
};
