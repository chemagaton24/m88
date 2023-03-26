import { LazyLoadImage } from "react-lazy-load-image-component";
import { Flipper, FlipperBack, FlipperFront, FlipperInner } from "./Styled";

const AnimateLogoFlip = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <Flipper>
      <FlipperInner>
        <FlipperFront>
          <LazyLoadImage src={logo} alt={name} />
        </FlipperFront>
        <FlipperBack>
          <LazyLoadImage src={logo} alt={name} />
        </FlipperBack>
      </FlipperInner>
    </Flipper>
  );
};

export default AnimateLogoFlip;
