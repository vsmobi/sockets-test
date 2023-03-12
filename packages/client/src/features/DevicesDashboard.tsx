import React, { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

import { Layout } from 'src/shared';
import { Device, DeviceInfo, ToggleDeviceStatus } from 'src/entities';

type ChangeStatusMessage = {
    id: string,
    command: 'connect' | 'disconnect'
};

const useGetDevicesFromSocket = (url: string) => {
    const [devices, setDevices] = useState<Record<string, DeviceInfo>>({});
    const {
        lastJsonMessage,
        sendJsonMessage
    } = useWebSocket<DeviceInfo>(url);

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
        } as ChangeStatusMessage);
    };

    return {
        devices,
        toggleDeviceStatus
    };
};

const URL = 'ws://localhost:5000';

export const DevicesDashboard = () => {
    const {
        devices,
        toggleDeviceStatus
    } = useGetDevicesFromSocket(URL);

    return (
        <Layout>
            {Object.values(devices)
                .map((deviceInfo) => (
                    <Device
                        toggleStatus={toggleDeviceStatus}
                        key={deviceInfo.id}
                        info={deviceInfo}
                    />
                ))}
        </Layout>
    );
};
