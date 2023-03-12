import { useMemo, useState } from 'react';
import { DeviceInfo } from '../types';

export const useDevicesFilter = (deviceValues: DeviceInfo[]) => {
    const [isNotConnectedHidden, setIsNotConnectedHidden] = useState(false);

    const filteredDevices = useMemo(() => {
        if (isNotConnectedHidden) {
            return deviceValues.filter(({ connected }) => connected);
        }
        return deviceValues;
    }, [deviceValues, isNotConnectedHidden]);

    return {
        isNotConnectedHidden,
        setIsNotConnectedHidden,
        filteredDevices
    };
};
