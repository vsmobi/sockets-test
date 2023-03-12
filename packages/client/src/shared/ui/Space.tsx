import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

const IsBetweenCss = css`
  justify-content: space-between;
`;
const SpaceCss = (isBetween: boolean) => css`
  align-items: center;
  display: flex;
  gap: var(--offset-m);
  ${isBetween && IsBetweenCss}
`;

type SpaceProps = PropsWithChildren<{
    isBetween?: boolean
}>;
export const Space = ({
    children,
    isBetween = false
}: SpaceProps) => (
    <div css={SpaceCss(isBetween)}>
        {children}
    </div>
);
