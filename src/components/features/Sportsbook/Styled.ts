import Slider from "react-slick";
import styled from "styled-components";
import { FlexBox } from "../../Styled/FlexBox";

export const SnippetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

export const GridItem1 = styled.div`
  grid-column: span 2;
`;

export const GridItem2 = styled.div`
  grid-column: span 4;
`;

export const Card = styled.div`
  aspect-ratio: 654 / 311;
  width: 100%;
  position: relative;
  border-radius: 2px;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Description = styled(FlexBox)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 0 16px;
  font-size: 14px;
`;

export const MatchBoard = styled(Slider)`
  aspect-ratio: 654 / 311;
  max-width: 654px;
  max-height: 311px;
  text-align: center;

  .item,
  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    height: calc(100% - 48px);

    caption {
      height: 48px;
      line-height: 48px;
      background-color: #000;
      color: #ffcd00;
      font-size: 18px;
      font-weight: 700;
    }
    tbody {
      tr {
        &:nth-child(odd) {
          background-color: #1a2332;
        }
        &:nth-child(even) {
          background-color: #26324d;
        }

        td {
          padding: 0;
          margin: 0;
        }
      }
    }
  }
`;
