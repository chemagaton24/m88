import Card from "./Card";
import MSports from "../../../assets/images/cards/sports/msports.jpg";
import SSports from "../../../assets/images/cards/sports/ssports.jpg";
import BSports from "../../../assets/images/cards/sports/bsports.jpg";
import VSports from "../../../assets/images/cards/sports/vsports.jpg";
import { FlexBox } from "../../Styled/FlexBox";
import MatchBoard from "./MatchBoard";
import SectionHeader from "../SectionTitle";
import { GridItem1, GridItem2, SnippetGrid } from "./Styled";

const Snippet = () => {
  return (
    <>
      <SectionHeader />
      <SnippetGrid>
        <GridItem1>
          <MatchBoard />
        </GridItem1>
        <GridItem1>
          <Card name={"msports"} imageSrc={MSports} />
        </GridItem1>
        <GridItem2>
          <FlexBox>
            <Card name={"ssports"} imageSrc={SSports} />
            <Card name={"bsports"} imageSrc={BSports} />
            <Card name={"vsports"} imageSrc={VSports} />
          </FlexBox>
        </GridItem2>
      </SnippetGrid>
    </>
  );
};

export default Snippet;
