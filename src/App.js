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

const ProgressBarContainer = styled.div`
  width: 80%;
`;

const percentageDone = (i) => {
  return Math.floor((i / 628) * 100);
};

export default function App() {
  return (
    <AppWrapper>
      <h1>FFXIV Quest Calculator</h1>
      <ProgressBarContainer>
        <Progress percentageDone={percentageDone(500)} />
      </ProgressBarContainer>
      <Form />
    </AppWrapper>
  );
}
