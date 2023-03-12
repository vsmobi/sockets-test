import { useEffect, useState } from 'react';

import { useWebSocket } from 'src/shared';

import { DeviceInfo, ToggleDeviceStatus } from '../types';

type ChangeStatusMessage = {
    id: string,
    command: 'connect' | 'disconnect'
};

export const useGetDevicesFromSocket = (url: string) => {
    const [devices, setDevices] = useState<Record<string, DeviceInfo>>({});
    const {
        lastJsonMessage,
        sendJsonMessage,
        readyState
    } = useWebSocket<DeviceInfo, ChangeStatusMessage>(url);

    useEffect(() => {
        if (lastJsonMessage !== null) {
            setDevices((prevState) => (
                {
                    ...prevState,
                    [lastJsonMessage.id]: lastJsonMessage

                }
            ));
        }
    }, [lastJsonMessage, setDevices]);

    const toggleDeviceStatus: ToggleDeviceStatus = ({
        id,
        isNextConnected
    }) => {
        sendJsonMessage({
            id,
            command: isNextConnected ? 'connect' : 'disconnect'
        });
    };
    return {
        readyState,
        devices,
        toggleDeviceStatus
    };
};
