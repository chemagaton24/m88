import Slider from "../components/features/Slider";
import Steps from "../components/features/Steps";
import Snippet from "../components/features/Sportsbook/Snippet";
import { InnerBox, MainContainer } from "../components/Styled/GlobalStyles";

const Home = () => {
  return (
    <div>
      <Slider />
      <Steps />
      <MainContainer>
        <InnerBox>
          <Snippet />
        </InnerBox>
      </MainContainer>
    </div>
  );
};

export default Home;
