import styled from "styled-components";
import { FlexBox } from "../../Styled/FlexBox";

export const CasinoProvidersGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 8px;
`;

export const Flipper = styled.div`
  height: 64px;

  img {
    height: 40px;
  }
`;

export const FlipperInner = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.3s;
  transform: rotateX(0deg) translateZ(0px);

  ${Flipper}:hover & {
    transform: rotateX(90deg) translateZ(0px);
  }
`;

export const FlipperFront = styled(FlexBox)`
  background-color: #1a2332;
  transform: rotateX(0deg) translateZ(32px);
  border-radius: 2px;
  height: 100%;
  justify-content: center;
`;

export const FlipperBack = styled(FlexBox)`
  background-color: #000;
  transform: rotateX(-90deg) translateZ(-32px);
  border-radius: 2px;
  height: 100%;
  justify-content: center;
`;
