import React from 'react';
import { css } from '@emotion/react';

const getDeviceStatusCss = (isConnected: boolean) => {
    if (isConnected) {
        return css`
          background-color: #0F0;
          color: black`;
    }
    return css`
      background-color: #F00;
      color: white;
    `;
};

type DeviceStatusProps = {
    isConnected: boolean
};

export const DeviceStatus = ({
    isConnected
}: DeviceStatusProps) => <div css={getDeviceStatusCss(isConnected)}/>;
