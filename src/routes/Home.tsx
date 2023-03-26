import Slider from "../components/features/Slider";
import Steps from "../components/features/Steps";
import SportsbookSnippet from "../components/features/Sportsbook/Snippet";
import CasinoSnippet from "../components/features/Casino/Snippet";
import { InnerBox, MainContainer } from "../components/Styled/GlobalStyles";
import DownloadAppBanner from "../components/features/DownloadApp/DownloadAppBanner";

const Home = () => {
  return (
    <div>
      <Slider />
      <Steps />
      <MainContainer>
        <InnerBox>
          <SportsbookSnippet />
          <CasinoSnippet />
          <DownloadAppBanner />
        </InnerBox>
      </MainContainer>
    </div>
  );
};

export default Home;
