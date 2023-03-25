import styled from "styled-components";
import SliderSX from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Slider = styled(SliderSX)`
  background-color: #0d111a;
  height: 400px;

  .slick-slide {
    position: relative;
  }

  * {
    outline: 0;
  }
`;

export const SlideItem = styled.div`
  height: 100%;
  vertical-align: top;
`;

export const SlideBG = styled(LazyLoadImage)`
  margin: 0 auto;
`;

export const SlideContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .inner {
    width: 50%;
  }

  h3 {
    margin: 0 0 8px;
    font-size: 40px;
    line-height: 46px;
  }

  p {
    margin: 0 0 32px;
    font-size: 24px;
  }
`;
