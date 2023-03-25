import { FlexBox } from "../../Styled/FlexBox";
import AnimateImage from "./AnimateImage";
import TwitterPale from "../../../assets/images/icons/SocialMedia/twitter-pale.svg";
import TwitterColored from "../../../assets/images/icons/SocialMedia/twitter-colored.svg";
import YoutubePale from "../../../assets/images/icons/SocialMedia/youtube-pale.svg";
import YoutubeColored from "../../../assets/images/icons/SocialMedia/youtube-colored.svg";

const paymentOptionList = [
  {
    name: "Twitter",
    paleImageSrc: TwitterPale,
    coloredImageSrc: TwitterColored,
  },
  {
    name: "Youtube",
    paleImageSrc: YoutubePale,
    coloredImageSrc: YoutubeColored,
  },
];

const SocialMedia = () => {
  return (
    <FlexBox as="ul" gap={8} justifyContent="flex-start">
      {paymentOptionList.map((item, key) => (
        <li key={key}>
          <AnimateImage {...item} />
        </li>
      ))}
    </FlexBox>
  );
};

export default SocialMedia;
