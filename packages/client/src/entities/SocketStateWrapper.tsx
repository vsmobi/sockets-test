import React, { PropsWithChildren } from 'react';

import { Loader, WebSocketReadyState } from 'src/shared';

type SocketStateWrapperProps = PropsWithChildren<{
    readyState: WebSocketReadyState
}>;

export const SocketStateWrapper = ({
    readyState,
    children
}: SocketStateWrapperProps) => {
    switch (readyState) {
        case WebSocketReadyState.CLOSED:
        case WebSocketReadyState.OPEN:
            return <>{children}</>;
        case WebSocketReadyState.CONNECTING: {
            return <Loader isLoading/>;
        }
        case WebSocketReadyState.UNINSTANTIATED:
            return <div>Socket error</div>;
        default:
            return null;
    }
};
