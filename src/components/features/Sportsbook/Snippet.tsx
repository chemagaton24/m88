import Card from "./Card";
import MSports from "../../../assets/images/cards/sports/msports.jpg";
import { FlexBox } from "../../Styled/FlexBox";
import MatchBoard from "./MatchBoard";
import SectionHeader from "../SectionTitle";

const Snippet = () => {
  return (
    <>
      <SectionHeader />
      <FlexBox gap={32} stretch>
        <div>
          <MatchBoard />
        </div>
        <div>
          <Card name={"msports"} imageSrc={MSports} />
        </div>
      </FlexBox>
    </>
  );
};

export default Snippet;
