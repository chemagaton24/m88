import styled from "styled-components";

export const Steps = styled.div`
  height: 96px;
  line-height: 96px;
  background-color: #26324d;
  overflow: hidden;
`;

export const Step = styled.div`
  text-align: center;
  cursor: pointer;
  width: 100%;
`;

export const Separator = styled.div`
  position: relative;
  background-color: #314060;
  width: 38px;
  height: 100%;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 48px 0 48px 24px;
    border-color: transparent transparent transparent #26324d;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(100%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 48px 0 48px 24px;
    border-color: transparent transparent transparent #314060;
  }
`;
