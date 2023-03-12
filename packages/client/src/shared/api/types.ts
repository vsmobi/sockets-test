import { ReadyState } from 'react-use-websocket';
import { JsonValue, Options } from 'react-use-websocket/src/lib/types';

export type WebSocketHook = <T extends JsonValue | null = JsonValue | null, M = JsonValue | null>(
    url: string,
    options?: Options,
    connect?: boolean
) => {
    sendJsonMessage: (message: M) => void,
    lastJsonMessage: T | null,
    readyState: ReadyState
};
