import styled, { css } from "styled-components";

const sizes = {
  default: css`
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  `,
  large: css`
    height: 48px;
    line-height: 48px;
    font-size: 20px;
  `,
};

const styleThemes = {
  default: css`
    background-color: #ffcd00;
    color: #1a2332;
  `,
  transparent: css`
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
  `,
};

export const Button = styled.button<{
  size?: "default" | "large";
  styleTheme?: "default" | "transparent";
}>`
  background-color: #ffcd00;
  border-radius: 2px;
  color: #1a2332;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  box-sizing: border-box;
  border: 0;
  width: auto;
  padding: 0 16px;
  text-transform: uppercase;
  cursor: pointer;

  ${({ size }) => (size ? sizes[size] : sizes["default"])}

  ${({ styleTheme }) =>
    styleTheme ? styleThemes[styleTheme] : styleThemes["default"]}
`;
