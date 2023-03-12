import React from 'react';
import { css } from '@emotion/react';

import { MainPage } from 'src/pages';

const AppStyleCss = css`
  background-color: #f0f;
  height: 100%;
  display: flex;
`;
export const App = () => (
    <div css={AppStyleCss}>
        <MainPage/>
    </div>
);
