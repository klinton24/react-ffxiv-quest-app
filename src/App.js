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
  return Math.floor((i / 419) * 100);
};

const SBPercentageDone = (i) => {
  return Math.floor((i / 628) * 100);
};

console.log(percentageDone(500));
console.log(ARRPercentageDone(500));
console.log(HWPercentageDone(500));
console.log(SBPercentageDone(500));

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
