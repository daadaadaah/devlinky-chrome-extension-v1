import React from 'react';

import { Global, css } from '@emotion/react';

import style from './designSystem';

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      body {
        width: 320px;
        min-height: 600px;
        background-color: ${style.common.background};
        color: ${style.common.color};
        font-family: ${style.common.font.en.family};
        /* 임시 : 디자인 QA용 */
        /* border: 1px solid #FFFFFF;  */
      }
    `}
  />
);

export default GlobalStyle;
