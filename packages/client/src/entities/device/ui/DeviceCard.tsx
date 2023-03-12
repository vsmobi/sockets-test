import React from 'react';

import { Card, Switch } from 'src/shared';

import { DeviceInfo, ToggleDeviceStatus } from '../types';
import { DeviceData } from './DeviceData';

type DeviceProps = {
    info: DeviceInfo,
    toggleStatus: ToggleDeviceStatus
};

export const DeviceCard = ({
    info,
    toggleStatus
}: DeviceProps) => {
    const {
        id,
        name,
        connected
    } = info;
    return (
        <Card
            title={name}
            extra={(
                <Switch
                    isChecked={connected}
                    onChange={() => {
                        toggleStatus({
                            id,
                            isNextConnected: !connected
                        });
                    }}
                />
            )}
        >
            <DeviceData {...info} />
        </Card>
    );
};
