import styled from "styled-components";

export const Header = styled.header`
  background-color: #1a2332;
  transition: height 0.3s;
  height: 144px;
`;

export const TopRow = styled.div<{ gap?: "8" }>`
  width: 100%;
  height: 104px;
`;

export const BottomRow = styled.div<{ gap?: "8" }>`
  height: 40px;
  border-top: 1px solid #253149;
  box-sizing: border-box;
`;
