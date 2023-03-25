import { FlexBox } from "../../Styled/FlexBox";
import AnimateImage from "./AnimateImage";
import QuickStransferPale from "../../../assets/images/logos/PaymentOptions/quicktransfer-pale.svg";
import QuickStransferColored from "../../../assets/images/logos/PaymentOptions/quicktransfer-colored.svg";
import Help2PayPale from "../../../assets/images/logos/PaymentOptions/help2pay-pale.svg";
import Help2PayColored from "../../../assets/images/logos/PaymentOptions/help2pay-colored.svg";
import PaytrustPale from "../../../assets/images/logos/PaymentOptions/paytrust-pale.svg";
import PaytrustColored from "../../../assets/images/logos/PaymentOptions/paytrust-colored.svg";
import NinePayPale from "../../../assets/images/logos/PaymentOptions/ninepay-pale.svg";
import NinePayColored from "../../../assets/images/logos/PaymentOptions/ninepay-colored.svg";

const paymentOptionList = [
  {
    name: "Quck Transfer",
    paleImageSrc: QuickStransferPale,
    coloredImageSrc: QuickStransferColored,
  },
  {
    name: "Help2Pay",
    paleImageSrc: Help2PayPale,
    coloredImageSrc: Help2PayColored,
  },
  {
    name: "Pay Trust",
    paleImageSrc: PaytrustPale,
    coloredImageSrc: PaytrustColored,
  },
  {
    name: "Nine Pay",
    paleImageSrc: NinePayPale,
    coloredImageSrc: NinePayColored,
  },
];

const PaymentOptions = () => {
  return (
    <FlexBox gap={16} justifyContent="flex-start">
      <span>Payment Options:</span>
      <FlexBox as="ul" gap={16} justifyContent="flex-start">
        {paymentOptionList.map((item, key) => (
          <li key={key}>
            <AnimateImage {...item} />
          </li>
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export default PaymentOptions;
