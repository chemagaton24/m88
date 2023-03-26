import { LazyLoadImage } from "react-lazy-load-image-component";
import Bournemouth from "../../../assets/images/logos/FootballClubs/bournemouth.svg";
import { FlexBox } from "../../Styled/FlexBox";

// const footballClubList = [
//   {
//     club: "AFC BOURNEMOUTH",
//     time: "2016 - 2020",
//     logo: Bournemouth,
//   },
// ];

const FootballClubs = () => {
  return (
    <FlexBox flexDisplay="inline-flex" justifyContent="flex-start" gap={16}>
      <LazyLoadImage src={Bournemouth} alt="Bournemouth" />
      <div>
        <div>
          <strong>AFC BOURNEMOUTH</strong>
        </div>
        <div>
          <time>2016 - 2020</time>
        </div>
      </div>
    </FlexBox>
  );
};

export default FootballClubs;
