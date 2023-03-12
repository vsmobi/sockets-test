import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

const GridCss = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--offset-m);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const GridLayout = ({ children }: PropsWithChildren) => (
    <div css={GridCss}>
        {children}
    </div>
);
