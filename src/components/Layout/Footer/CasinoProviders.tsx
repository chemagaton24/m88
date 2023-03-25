import { FlexBox } from "../../Styled/FlexBox";
import AnimateImage from "./AnimateImage";
import OpusGamingPale from "../../../assets/images/logos/CasinoProviders/opusgaming-pale.svg";
import OpusGamingColored from "../../../assets/images/logos/CasinoProviders/opusgaming-colored.svg";
import AGPale from "../../../assets/images/logos/CasinoProviders/ag-pale.svg";
import AGColored from "../../../assets/images/logos/CasinoProviders/ag-colored.svg";
import CQ9Pale from "../../../assets/images/logos/CasinoProviders/cq9-pale.svg";
import CQ9Colored from "../../../assets/images/logos/CasinoProviders/cq9-colored.svg";
import HabaneroPale from "../../../assets/images/logos/CasinoProviders/habanero-pale.svg";
import HabaneroColored from "../../../assets/images/logos/CasinoProviders/habanero-colored.svg";
import ISoftBetPale from "../../../assets/images/logos/CasinoProviders/isoftbet-pale.svg";
import ISoftBetColored from "../../../assets/images/logos/CasinoProviders/isoftbet-colored.svg";
import MicrogamingPale from "../../../assets/images/logos/CasinoProviders/microgaming-pale.svg";
import MicrogamingColored from "../../../assets/images/logos/CasinoProviders/microgaming-colored.svg";
import SkyWindPale from "../../../assets/images/logos/CasinoProviders/skywind-pale.svg";
import SkyWindColored from "../../../assets/images/logos/CasinoProviders/skywind-colored.svg";
import PragmaticPale from "../../../assets/images/logos/CasinoProviders/pragmatic-pale.svg";
import PragmaticColored from "../../../assets/images/logos/CasinoProviders/pragmatic-colored.svg";
import SabaSportPale from "../../../assets/images/logos/CasinoProviders/sabasport-pale.svg";
import SabaSportColored from "../../../assets/images/logos/CasinoProviders/sabasport-colored.svg";
import PlayNGoPale from "../../../assets/images/logos/CasinoProviders/playngo-pale.svg";
import PlayNGoColored from "../../../assets/images/logos/CasinoProviders/playngo-colored.svg";
import LottoLandPale from "../../../assets/images/logos/CasinoProviders/lottoland-pale.svg";
import LottoLandColored from "../../../assets/images/logos/CasinoProviders/lottoland-colored.svg";
import IDNPlayPale from "../../../assets/images/logos/CasinoProviders/idnplay-pale.svg";
import IDNPlayColored from "../../../assets/images/logos/CasinoProviders/idnplay-colored.svg";
import PlaytechPale from "../../../assets/images/logos/CasinoProviders/playtech-pale.svg";
import PlaytechColored from "../../../assets/images/logos/CasinoProviders/playtech-colored.svg";
import NetentPale from "../../../assets/images/logos/CasinoProviders/netent-pale.svg";
import NetentColored from "../../../assets/images/logos/CasinoProviders/netent-colored.svg";

const paymentOptionList = [
  {
    name: "OpusGaming",
    paleImageSrc: OpusGamingPale,
    coloredImageSrc: OpusGamingColored,
  },
  {
    name: "AG",
    paleImageSrc: AGPale,
    coloredImageSrc: AGColored,
  },
  {
    name: "CQ9",
    paleImageSrc: CQ9Pale,
    coloredImageSrc: CQ9Colored,
  },
  {
    name: "Habanero",
    paleImageSrc: HabaneroPale,
    coloredImageSrc: HabaneroColored,
  },
  {
    name: "ISoftBet",
    paleImageSrc: ISoftBetPale,
    coloredImageSrc: ISoftBetColored,
  },
  {
    name: "Microgaming",
    paleImageSrc: MicrogamingPale,
    coloredImageSrc: MicrogamingColored,
  },
  {
    name: "SkyWind",
    paleImageSrc: SkyWindPale,
    coloredImageSrc: SkyWindColored,
  },
  {
    name: "Pragmatic",
    paleImageSrc: PragmaticPale,
    coloredImageSrc: PragmaticColored,
  },
  {
    name: "Saba Sport",
    paleImageSrc: SabaSportPale,
    coloredImageSrc: SabaSportColored,
  },
  {
    name: "Play N Go",
    paleImageSrc: PlayNGoPale,
    coloredImageSrc: PlayNGoColored,
  },
  {
    name: "Lotto Land",
    paleImageSrc: LottoLandPale,
    coloredImageSrc: LottoLandColored,
  },
  {
    name: "IDN Play",
    paleImageSrc: IDNPlayPale,
    coloredImageSrc: IDNPlayColored,
  },
  {
    name: "Playtech",
    paleImageSrc: PlaytechPale,
    coloredImageSrc: PlaytechColored,
  },
  {
    name: "Netent",
    paleImageSrc: NetentPale,
    coloredImageSrc: NetentColored,
  },
];

const CasinoProviders = () => {
  return (
    <FlexBox as="ul" gap={48} justifyContent="flex-start" flexWrap="wrap">
      {paymentOptionList.map((item, key) => (
        <li key={key}>
          <AnimateImage {...item} />
        </li>
      ))}
    </FlexBox>
  );
};

export default CasinoProviders;
