import React from 'react';

import { DeviceInfo } from '../types';

export const DeviceData = ({
    connected,
    value,
    unit
}: DeviceInfo) => {
    if (!connected) {
        return <span>Not Connected</span>;
    }
    return (
        <span>
            {`${value} ${unit}`}
        </span>
    );
};
