import React from 'react';
import { css } from '@emotion/react';

import { SpaceBetween, Switch } from 'src/shared';

import { DeviceInfo, ToggleDeviceStatus } from './types';
import { DeviceData } from './ui';

const DeviceCss = css`
  background-color: #fff;
  border-radius: 8px;
  padding: var(--offset-m);
`;

type DeviceProps = {
    info: DeviceInfo,
    toggleStatus: ToggleDeviceStatus
};

export const Device = ({
    info,
    toggleStatus
}: DeviceProps) => {
    const {
        id,
        name,
        connected
    } = info;
    return (
        <article css={DeviceCss}>
            <SpaceBetween>
                <h2>{name}</h2>
                <Switch
                    isChecked={connected}
                    onChange={(isNextConnected) => {
                        toggleStatus({
                            id,
                            isNextConnected
                        });
                    }}
                />
            </SpaceBetween>
            <div>
                <DeviceData {...info} />
            </div>
        </article>
    );
};
