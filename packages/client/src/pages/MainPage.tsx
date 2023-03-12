import { css } from '@emotion/react';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

import { Page } from 'src/shared';
import { Device, DeviceInfo, ToggleDeviceStatus } from 'src/entities';

type ChangeStatusMessage = {
    id: string,
    command: 'connect' | 'disconnect'
};
const DevicesDashboard = ({ children }: PropsWithChildren) => (
    <div css={css`
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--offset-s);

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (min-width: 992px) {
        gap: var(--offset-m);
        grid-template-columns: 1fr 1fr 1fr;
      }

      @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      }

    `}
    >
        {children}
    </div>
);

export const MainPage = () => {
    const [devices, setDevices] = useState<Record<string, DeviceInfo>>({});
    const {
        lastJsonMessage,
        sendJsonMessage
    } = useWebSocket<DeviceInfo>('ws://localhost:5000');

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

    const handleToggleDeviceConnection: ToggleDeviceStatus = ({
        id,
        isNextConnected
    }) => {
        sendJsonMessage({
            id,
            command: isNextConnected ? 'connect' : 'disconnect'
        } as ChangeStatusMessage);
    };

    return (
        <Page title="Devices">
            <DevicesDashboard>
                {Object.values(devices)
                    .map((deviceInfo) => (
                        <Device
                            toggleStatus={handleToggleDeviceConnection}
                            key={deviceInfo.id}
                            info={deviceInfo}
                        />
                    ))}
            </DevicesDashboard>
        </Page>
    );
};
