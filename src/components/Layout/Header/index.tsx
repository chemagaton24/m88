import { Button, FlexBox, InnerBox } from "../../Styled/GlobalStyles";
import Logo from "./Logo";
import { BottomRow, Header, Navbar, TopRow } from "./Styled";

const Index = () => {
  return (
    <Header>
      <TopRow>
        <InnerBox className="h-100">
          <FlexBox className="h-100">
            <Logo />
            <FlexBox justifyContent="flex-start" gap={16}>
              <Button styleTheme="transparent">Login</Button>
              <Button>Join Now</Button>
            </FlexBox>
          </FlexBox>
        </InnerBox>
      </TopRow>
      <BottomRow>
        <InnerBox className="h-100">
          <Navbar />
        </InnerBox>
      </BottomRow>
    </Header>
  );
};

export default Index;
