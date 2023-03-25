import { AnimateImage as AnimateImageSX } from "./Styled";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AnimateImage = ({
  name,
  paleImageSrc,
  coloredImageSrc,
}: {
  name: string;
  paleImageSrc: string;
  coloredImageSrc: string;
}) => {
  return (
    <AnimateImageSX>
      <div className="pale-image">
        <LazyLoadImage src={paleImageSrc} alt={name} />
      </div>
      <div className="colored-image">
        <LazyLoadImage src={coloredImageSrc} alt={name} />
      </div>
    </AnimateImageSX>
  );
};

export default AnimateImage;
