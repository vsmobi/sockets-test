import React from 'react';

import { DeviceInfo } from '../types';

export const DeviceData = ({
    connected,
    value,
    unit
}: DeviceInfo) => {
    const prefix = !connected ? 'Last Value ' : '';
    return (
        <span>
            {value ? `${prefix}${value} ${unit}` : 'No Data'}
        </span>
    );
};
