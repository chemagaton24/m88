import React from "react";
import { FlexBox } from "../../Styled/FlexBox";
import { InnerBox } from "../../Styled/GlobalStyles";
import { Separator, Step, Steps as StepsSX } from "./Styled";

const Steps = () => {
  return (
    <StepsSX>
      <InnerBox className="h-100">
        <FlexBox className="h-100">
          <Step>JOIN M88 It’s quick and easy!</Step>
          <Separator />
          <Step>JOIN M88 It’s quick and easy!</Step>
          <Separator />
          <Step>JOIN M88 It’s quick and easy!</Step>
        </FlexBox>
      </InnerBox>
    </StepsSX>
  );
};

export default Steps;
