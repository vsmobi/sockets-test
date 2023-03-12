import React, { ReactNode } from 'react';

import { Space } from 'src/shared';

export type PageHeaderProps = {
    title: string,
    extra?: ReactNode
};

export const PageHeader = ({
    title,
    extra
}: PageHeaderProps) => (
    <header>
        <Space isBetween>
            <h1>{title}</h1>
            {extra}
        </Space>
    </header>
);
