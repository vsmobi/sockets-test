import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

const MainCss = css`
  flex: 1 1 auto;
  background-color: var(--color-grey-1);
  padding: var(--offset-l);
`;

const HeaderCss = css`
  margin-bottom: var(--offset-m);
`;

type PageProps = PropsWithChildren<{
    title: string
}>;

export const Page = ({
    children,
    title
}: PageProps) => (
    <main css={MainCss}>
        <header css={HeaderCss}>
            <h1>{title}</h1>
        </header>
        <div>
            {children}
        </div>
    </main>
);
