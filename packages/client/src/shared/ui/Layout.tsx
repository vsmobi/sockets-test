import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

const GridCss = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--offset-s);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    gap: var(--offset-m);
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

`;
export const Layout = ({ children }: PropsWithChildren) => (
    <div css={GridCss}>
        {children}
    </div>
);
