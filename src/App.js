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

const imgBackgroundGrid = styled.div`
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

const gridImg = styled.div`
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
    <gridImg>
      <img
        className=".grid-box"
        key={image}
        alt={image}
        src={require(`./images/${image}.jpg`)}
      />
    </gridImg>
  );
});

/*Delete Later*/
const testValue = 50;
export default function App() {
  return (
    <AppWrapper>
      <h1>FFXIV Quest Calculator</h1>
      <imgBackgroundGrid>{imgBackground}</imgBackgroundGrid>
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
