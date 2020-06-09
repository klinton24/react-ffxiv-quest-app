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

const percentageDone = (i) => {
  return Math.floor((i / 628) * 100);
};

const ARRPercentageDone = (i) => {
  return Math.floor((i / 281) * 100);
};

const HWPercentageDone = (i) => {
  if (i < 281) {
    return 0;
  } else {
    return Math.floor((i / 419) * 100);
  }
};

const SBPercentageDone = (i) => {
  if (i < 419) {
    return 0;
  } else {
    return Math.floor((i / 628) * 100);
  }
};

export default function App() {
  return (
    <AppWrapper>
      <h1>FFXIV Quest Calculator</h1>
      <Progress
        percentageDone={percentageDone(500)}
        ARRPercentageDone={ARRPercentageDone(500)}
        HWPercentageDone={HWPercentageDone(500)}
        SBPercentageDone={SBPercentageDone(500)}
      />
      <Form />
    </AppWrapper>
  );
}
