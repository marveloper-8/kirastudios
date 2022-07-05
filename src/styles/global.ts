import { createGlobalStyle } from "styled-components";

export const theme = {};

export type MyProps = {
  theme: typeof theme;
};

export const GlobalStyles = createGlobalStyle<MyProps>`
  :root {
    --color-dark: #191c1e;
    --color-white: #ffffff;
    --color-grey: #3f4450;
    --color-grey-2: #747579;
    --color-grey-3: #f0f3f4;
    --color-green: #59a556;
    --color-black: #000000;
    --color-purple: #510cf3;
    --color-red: #F04438;
  `;