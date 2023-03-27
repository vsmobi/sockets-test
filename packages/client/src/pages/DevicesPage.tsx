import React from 'react';

import {
    GridLayout,
    Space,
    Switch,
    useAppConfig,
    Page
} from 'src/shared';
import {
    DeviceCard,
    useGetDevicesFromSocket,
    SocketStateWrapper,
    useDevicesFilter
} from 'src/entities';

export const DevicesPage = () => {
    const [{ url }] = useAppConfig();
    const {
        readyState,
        devices,
        toggleDeviceStatus
    } = useGetDevicesFromSocket(url);
    const {
        isNotConnectedHidden,
        setIsNotConnectedHidden,
        filteredDevices
    } = useDevicesFilter(Object.values(devices));

    return (
        <Page
            title="Devices"
            extra={(
                <Space>
                    <span>Show only connected Devices</span>
                    <Switch
                        isChecked={isNotConnectedHidden}
                        onChange={(e) => {
                            setIsNotConnectedHidden(e.target.checked);
                        }}
                    />
                </Space>
            )}
        >
            <SocketStateWrapper
                readyState={readyState}
            >
                <GridLayout>
                    {!filteredDevices.length && <div>No devices</div>}
                    {filteredDevices.map((deviceInfo) => (
                        <DeviceCard
                            toggleStatus={toggleDeviceStatus}
                            key={deviceInfo.id}
                            info={deviceInfo}
                        />
                    ))}
                </GridLayout>
            </SocketStateWrapper>
        </Page>

    );
};
