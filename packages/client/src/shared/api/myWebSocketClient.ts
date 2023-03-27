import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ReadyState } from 'react-use-websocket';

import { WebSocketHook } from './types';

const getLastJsonMessage = (data: string) => {
    if (data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            return {};
        }
    }
    return null;
};

export const useWebSocket: WebSocketHook = <T, M>(url: string) => {
    const [lastMessage, setLastMessage] = useState<string>('');
    const [readyState, setReadyState] = useState<ReadyState>(ReadyState.CONNECTING);
    const socketRef = useRef<WebSocket>();

    const setMessage = ({ data }: MessageEvent) => {
        setLastMessage(data);
    };

    const lastJsonMessage: T = useMemo(() => getLastJsonMessage(lastMessage), [lastMessage]);
    const sendJsonMessage = useCallback((message: M) => {
        if (message) {
            socketRef.current?.send(JSON.stringify(message));
        }
    }, []);

    useEffect(() => {
        if (!socketRef?.current) {
            socketRef.current = new WebSocket(url);
        }

        socketRef.current.onopen = () => {
            setReadyState(ReadyState.OPEN);
        };

        socketRef.current.onmessage = setMessage;

        socketRef.current.onerror = () => {
            setReadyState(ReadyState.UNINSTANTIATED);
        };
    }, []);

    return {
        lastJsonMessage,
        sendJsonMessage,
        readyState
    };
};
