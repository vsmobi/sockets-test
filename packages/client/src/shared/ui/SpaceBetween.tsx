import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

const SpaceCss = css`
  display: flex;
  gap: var(--offset-m);
  justify-content: space-between;
`;

export const SpaceBetween = ({ children }: PropsWithChildren) => (
    <div css={SpaceCss}>
        {children}
    </div>
);
