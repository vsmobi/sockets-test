import React, { useState } from 'react';

import { Card, Switch } from 'src/shared';

import { DeviceInfo, ToggleDeviceStatus } from '../types';
import { DeviceData } from './DeviceData';

type DeviceProps = {
    info: DeviceInfo,
    toggleStatus: ToggleDeviceStatus
};

export const DeviceCard = React.memo(({
    info,
    toggleStatus
}: DeviceProps) => {
    const [lastValue, setLastValue] = useState<string>('');

    const {
        id,
        name,
        connected,
        value
    } = info;
    return (
        <Card
            title={name}
            extra={(
                <Switch
                    isChecked={connected}
                    onChange={() => {
                        if (connected) {
                            setLastValue(value);
                        }
                        toggleStatus({
                            id,
                            isNextConnected: !connected
                        });
                    }}
                />
            )}
        >
            <DeviceData {...info} value={value || lastValue}/>
        </Card>
    );
});
