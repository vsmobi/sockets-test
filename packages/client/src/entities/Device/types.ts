export type ToggleDeviceStatusProps = {
    isNextConnected: boolean,
    id: string
};

export type ToggleDeviceStatus = (props: ToggleDeviceStatusProps) => void;

export type DeviceInfo = {
    id: string,
    name: string,
    connected: boolean,
    unit: string,
    value: string
};
