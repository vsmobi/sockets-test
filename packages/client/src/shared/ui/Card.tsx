import React, { PropsWithChildren, ReactNode } from 'react';
import { css } from '@emotion/react';

import { SpaceBetween } from './SpaceBetween';

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
        <SpaceBetween>
            <h2>{title}</h2>
            {extra}
        </SpaceBetween>
        {children}
    </article>

);
