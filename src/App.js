import React, { useState } from "react";
import Form from "./components/Form/Form";
import styled from "styled-components";

import Progress from "./components/Progress/Progress";

const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  min-width: 350px;
  align-items: left;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: stretch;
`;

const ImgBackgroundGrid = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  grid-row-gap: 0px;
  top: 0;
  left: 0;
  z-index: -100;
  filter: brightness(50%);
`;

const GridImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  align-items: center;
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

const imgArray = [
  "ffxiv2.0",
  "ffxiv2.1",
  "ffxiv2.2",
  "ffxiv2.3",
  "ffxiv2.4",
  "ffxiv2.5",
  "ffxiv3.0",
  "ffxiv3.1",
  "ffxiv3.2",
  "ffxiv3.3",
  "ffxiv3.4",
  "ffxiv3.5",
  "ffxiv4.0",
  "ffxiv4.1",
  "ffxiv4.2",
  "ffxiv4.3",
  "ffxiv4.4",
  "ffxiv4.5",
  "ffxiv5.0",
  "ffxiv5.1",
  "ffxiv5.2",
];

const imgBackground = imgArray.map((image) => {
  return (
    <GridImg>
      <img
        className="gridImg"
        key={image}
        alt={image}
        src={require(`./images/${image}.jpg`)}
      />
    </GridImg>
  );
});

export default function App() {
  const [questPercentage, setQuestPercentage] = useState(0);

  return (
    <AppWrapper>
      <ContentWrapper>
        <h1>FFXIV Quest Calculator</h1>
        <ImgBackgroundGrid>{imgBackground}</ImgBackgroundGrid>
        <Progress
          percentageDone={percentageDone(questPercentage)}
          ARRPercentageDone={ARRPercentageDone(questPercentage)}
          HWPercentageDone={HWPercentageDone(questPercentage)}
          SBPercentageDone={SBPercentageDone(questPercentage)}
          ShBPercentageDone={ShBPercentageDone(questPercentage)}
        />
        <Form setQuestPercentage={setQuestPercentage} />
      </ContentWrapper>
    </AppWrapper>
  );
}
