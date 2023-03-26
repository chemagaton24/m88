import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../../../assets/images/sliders/1.jpg";
import { SlideBG, SlideContent, SlideItem, Slider as SliderSX } from "./Styled";
import { InnerBox } from "../../Styled/GlobalStyles";
import { FlexBox } from "../../Styled/FlexBox";
import { Button } from "../../Styled/Button";

const sliderList = [
  {
    largeText:
      "PRESENTING A REAL-LIFE CASINO EXPERIENCE WITH BIGGEST VALUE ON REBATES.",
    smallText: "Check it out now!",
  },
  {
    largeText:
      "PRESENTING A REAL-LIFE CASINO EXPERIENCE WITH BIGGEST VALUE ON REBATES.",
    smallText: "Check it out now!",
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
};

const Slider = () => (
  <SliderSX {...settings}>
    {sliderList.map((item, key) => (
      <SlideItem key={key}>
        <SlideBG src={Slide1} />
        <SlideContent>
          <InnerBox className="h-100">
            <FlexBox justifyContent="flex-end" className="h-100">
              <div className="inner">
                <h3>{item.largeText}</h3>
                <p>{item.smallText}</p>
                <Button>Play Now</Button>
              </div>
            </FlexBox>
          </InnerBox>
        </SlideContent>
      </SlideItem>
    ))}
  </SliderSX>
);

export default Slider;
