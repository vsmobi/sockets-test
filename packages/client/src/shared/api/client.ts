import useWebSocketRuw, { ReadyState } from 'react-use-websocket';

import { useWebSocket as useWebSocketMy } from './myWebSocketClient';
import { WebSocketHook } from './types';

// eslint-disable-next-line import/no-mutable-exports
let useWebSocket: WebSocketHook = useWebSocketRuw;

if (process.env.REACT_APP_USE_MY_WEB_SOCKET_CLIENT === 'true') {
    useWebSocket = useWebSocketMy;
}

export { useWebSocket, ReadyState };
