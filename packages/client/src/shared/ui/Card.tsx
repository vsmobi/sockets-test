import React, { PropsWithChildren, ReactNode } from 'react';
import { css } from '@emotion/react';

import { Space } from './Space';

const CardCss = css`
  background-color: #fff;
  border-radius: 8px;
  padding: var(--offset-m);

  > * {
    margin-bottom: var(--offset-m);
  }
`;

type CardProps = PropsWithChildren<{
    title: string,
    extra?: ReactNode
}>;

export const Card = ({
    title,
    extra,
    children
}: CardProps) => (
    <article css={CardCss}>
        <Space isBetween>
            <h2>{title}</h2>
            {extra}
        </Space>
        {children}
    </article>

);
