import React, { PropsWithChildren } from 'react';
import { css, keyframes } from '@emotion/react';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderCss = css`
  display: flex;
  justify-content: center;

  :after {
    content: " ";
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border-style: solid;
    border-width: 6px;
    border-color: var(--color-blue-1) transparent var(--color-blue-1) transparent;
    animation: ${rotate} 1.2s linear infinite;
  }

`;

type LoaderProps = PropsWithChildren<{
    isLoading: boolean
}>;

export const Loader = ({
    isLoading,
    children
}: LoaderProps) => {
    if (isLoading) {
        return <div css={LoaderCss}/>;
    }

    return <>{children}</>;
};
