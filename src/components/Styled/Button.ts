import styled from "styled-components";

export const Button = styled.button<{ styleTheme?: "transparent" }>`
  background-color: #ffcd00;
  border-radius: 2px;
  color: #1a2332;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  box-sizing: border-box;
  border: 0;
  width: auto;
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  text-transform: uppercase;

  ${({ styleTheme }) =>
    styleTheme === "transparent" &&
    `
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
  `}
`;
