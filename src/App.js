import React from "react";
import Form from "./components/Form/Form";
import styled from "styled-components";

import Progress from "./components/Progress/Progress";

const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const MaxARRQuests = 281;
const MaxHWQuests = 419;
const MaxSBQuests = 628;
const MaxShBQuests = 734;

const percentageDone = (i) => {
  return Math.floor((i / MaxShBQuests) * 100);
};

const ARRPercentageDone = (i) => {
  if (Math.floor((i / MaxARRQuests) * 100) > 100) {
    return 100;
  } else {
    return Math.floor((i / MaxARRQuests) * 100);
  }
};

const HWPercentageDone = (i) => {
  if (i < MaxARRQuests) {
    return 0;
  } else if (
    Math.floor(((i - MaxARRQuests) / (MaxHWQuests - MaxARRQuests)) * 100) > 100
  ) {
    return 100;
  } else {
    return Math.floor(
      ((i - MaxARRQuests) / (MaxHWQuests - MaxARRQuests)) * 100
    );
  }
};

const SBPercentageDone = (i) => {
  if (i < MaxHWQuests) {
    return 0;
  } else if (
    Math.floor(((i - MaxHWQuests) / (MaxSBQuests - MaxHWQuests)) * 100 > 100)
  ) {
    return 100;
  } else {
    return Math.floor(((i - MaxHWQuests) / (MaxSBQuests - MaxHWQuests)) * 100);
  }
};

const ShBPercentageDone = (i) => {
  if (i < MaxSBQuests) {
    return 0;
  } else if (
    Math.floor(((i - MaxSBQuests) / (MaxShBQuests - MaxSBQuests)) * 100 > 100)
  ) {
    return 100;
  } else {
    return Math.floor(((i - MaxSBQuests) / (MaxShBQuests - MaxSBQuests)) * 100);
  }
};

/*Delete Later*/
const testValue = 50;
export default function App() {
  return (
    <AppWrapper>
      <h1>FFXIV Quest Calculator</h1>
      <Progress
        percentageDone={percentageDone(testValue)}
        ARRPercentageDone={ARRPercentageDone(testValue)}
        HWPercentageDone={HWPercentageDone(testValue)}
        SBPercentageDone={SBPercentageDone(testValue)}
        ShBPercentageDone={ShBPercentageDone(testValue)}
      />
      <Form />
    </AppWrapper>
  );
}
