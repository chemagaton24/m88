import styled from "styled-components";
import NavbarSX from "./Navbar";

export const Header = styled.header`
  background-color: #1a2332;
  transition: height 0.3s;
  height: 144px;
  color: ${(p) => p.theme.dark.textColor};
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

export const Navbar = styled(NavbarSX)`
  height: 100%;

  ul {
    height: 100%;

    li {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;

      a {
        font-size: 14px;
        text-transform: uppercase;
        color: ${(p) => p.theme.dark.textColor};
        font-weight: 800;
        text-decoration: none;

        &.active {
          color: #ffcd00;

          &:after {
            content: "";
            display: block;
            position: absolute;
            left: 50%;
            bottom: 2px;
            width: 100%;
            height: 2px;
            box-sizing: border-box;
            transform: translateX(-50%);
            background-color: #ffcd00;
          }
        }

        svg {
          width: 24px;
          height: 24px;
          vertical-align: middle;
        }
      }
    }
  }
`;
