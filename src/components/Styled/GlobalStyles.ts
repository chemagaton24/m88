// globalStyles.js
import styled, { createGlobalStyle } from "styled-components";
import { Button as ButtonSX } from "./Button";
import { FlexBox as FlexBoxSX } from "./FlexBox";
import { marginBottomCSS } from "./Margin";

export const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
    html {
        min-height: 100%;
    }
    body {
        background: #314060;
        color: #FFF;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        overflow-x: hidden;
    }
    img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        vertical-align: middle;
        -ms-interpolation-mode: nearest-neighbor;
    }
    .h-100 {
        height: 100%;
    }

    ${marginBottomCSS}
`;

export const InnerBox = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  padding: 0 13px;
  box-sizing: border-box;
`;

export const MainContainer = styled.main`
  padding: 48px 0;
`;

export const Button = styled(ButtonSX)``;

export const FlexBox = styled(FlexBoxSX)``;
