import { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { throttle } from 'lodash';

import { useWebSocket } from 'src/shared';

import { DeviceInfo, ToggleDeviceStatus } from '../types';

type ChangeStatusMessage = {
    id: string,
    command: 'connect' | 'disconnect'
};

const getNextDeviceInfo = (nextDeviceInfo: DeviceInfo, prevDeviceInfo?: DeviceInfo) => {
    if (!prevDeviceInfo) {
        return nextDeviceInfo;
    }
    const {
        value: nextValue,
        ...rest
    } = nextDeviceInfo;
    return { value: nextValue ?? prevDeviceInfo.value, ...rest };
};

export const useGetDevicesFromSocket = (url: string) => {
    const [devices, setDevices] = useState<Record<string, DeviceInfo>>({});
    const {
        lastJsonMessage,
        sendJsonMessage,
        readyState
    } = useWebSocket<DeviceInfo, ChangeStatusMessage>(url);

    const setDevicesThrottled = useCallback(throttle(setDevices, 1000), [setDevices]);

    useEffect(() => {
        if (lastJsonMessage !== null) {
            setDevicesThrottled((prevState) => {
                const next = getNextDeviceInfo(lastJsonMessage, prevState[lastJsonMessage.id]);

                return (
                    {
                        ...prevState,
                        ...(next ? { [lastJsonMessage.id]: next } : null)
                    }
                );
            });
        }
    }, [lastJsonMessage, setDevicesThrottled]);

    const toggleDeviceStatus: ToggleDeviceStatus = useCallback(({
        id,
        isNextConnected
    }) => {
        sendJsonMessage({
            id,
            command: isNextConnected ? 'connect' : 'disconnect'
        });
    }, [sendJsonMessage]);

    return {
        readyState,
        devices,
        toggleDeviceStatus
    };
};
