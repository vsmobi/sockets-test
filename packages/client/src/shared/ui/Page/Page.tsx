import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

import { PageHeader, PageHeaderProps } from './ui';

const MainCss = css`
  flex: 1 1 auto;
  background-color: var(--color-grey-1);
  padding: var(--offset-l);

  > * {
    margin-bottom: var(--offset-l);
  }
`;

type PageProps = PropsWithChildren<PageHeaderProps>;

export const Page = ({
    children,
    ...rest
}: PageProps) => (
    <main css={MainCss}>
        <PageHeader {...rest}/>
        {children}
    </main>
);
