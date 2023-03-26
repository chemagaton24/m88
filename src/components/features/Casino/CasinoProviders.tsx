import AnimateLogoFlip from "./AnimateLogoFlip";
import CQ9 from "../../../assets/images/logos/CasinoProviders/cq9.svg";
import Habanero from "../../../assets/images/logos/CasinoProviders/habanero.svg";
import ISoftBet from "../../../assets/images/logos/CasinoProviders/isoftbet.svg";
import Microgaming from "../../../assets/images/logos/CasinoProviders/microgaming.svg";
import Skywind from "../../../assets/images/logos/CasinoProviders/skywind.svg";
import Pragmatic from "../../../assets/images/logos/CasinoProviders/pragmatic.svg";
import PlayNGo from "../../../assets/images/logos/CasinoProviders/playngo.svg";
import PlayTech from "../../../assets/images/logos/CasinoProviders/playtech.svg";
import Netent from "../../../assets/images/logos/CasinoProviders/netent.svg";
import { CasinoProvidersGrid } from "./Styled";

const CasinoProviders = () => {
  return (
    <CasinoProvidersGrid>
      <AnimateLogoFlip logo={CQ9} name="cq9" />
      <AnimateLogoFlip logo={Habanero} name="Habanero" />
      <AnimateLogoFlip logo={ISoftBet} name="ISoftBet" />
      <AnimateLogoFlip logo={Microgaming} name="Microgaming" />
      <AnimateLogoFlip logo={Skywind} name="Skywind" />
      <AnimateLogoFlip logo={Pragmatic} name="Pragmatic" />
      <AnimateLogoFlip logo={PlayNGo} name="PlayNGo" />
      <AnimateLogoFlip logo={PlayTech} name="PlayTech" />
      <AnimateLogoFlip logo={Netent} name="Netent" />
    </CasinoProvidersGrid>
  );
};

export default CasinoProviders;
