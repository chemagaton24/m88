import { FlexBox } from "../../Styled/FlexBox";
import { InnerBox } from "../../Styled/GlobalStyles";
import CasinoProviders from "./CasinoProviders";
import FootballClubs from "./FootballClubs";
import M88Locales from "./M88Locales";
import Navbar from "./Navbar";
import PaymentOptions from "./PaymentOptions";
import SocialMedia from "./SocialMedia";
import { Footer as FooterSX, BorderedRow } from "./Styled";

const Footer = () => (
  <FooterSX>
    <InnerBox>
      <BorderedRow className="row-1">
        <FlexBox className="m-b-24">
          <PaymentOptions />
          <SocialMedia />
        </FlexBox>
        <FlexBox>
          <Navbar />
          <M88Locales />
        </FlexBox>
      </BorderedRow>
      <BorderedRow className="row-2 casino-providers">
        <CasinoProviders />
      </BorderedRow>
      <BorderedRow className="row-2 casino-providers">
        <FootballClubs />
      </BorderedRow>
    </InnerBox>
  </FooterSX>
);

export default Footer;
