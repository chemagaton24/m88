import styled from "styled-components";

export const Icon = styled.i`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const SoccerIcon = styled(Icon)`
  background-image: url("${require("../../../assets/images/icons/Sports/soccerball-white.svg")
    .default}");
`;
