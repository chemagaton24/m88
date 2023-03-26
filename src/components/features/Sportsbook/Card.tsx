import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "../../Styled/GlobalStyles";
import { Card as CardSX, Description } from "./Styled";

const Card = ({ name, imageSrc }: { name: string; imageSrc: string }) => {
  return (
    <CardSX>
      <LazyLoadImage src={imageSrc} alt={name} />
      <Description>
        <div>
          *Previously <strong>mSports</strong>
        </div>
        <Button size="large">Play Now</Button>
      </Description>
    </CardSX>
  );
};

export default Card;
