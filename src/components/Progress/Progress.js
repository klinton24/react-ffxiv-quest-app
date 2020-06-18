import React from "react";
import {
  ProgressBarContainer,
  ExpBarContainer,
  Track,
  Filler,
  MainTrackWrapper,
} from "../../styles";

const FillerAdjust = (i) => {
  if (i > 0 && i < 10) {
    return 10;
  } else return i;
};

const Progress = ({
  percentageDone,
  ARRPercentageDone,
  HWPercentageDone,
  SBPercentageDone,
  ShBPercentageDone,
}) => {
  return (
    <ProgressBarContainer>
      <ExpBarContainer>
        ARR
        <Track>
          <Filler percentageDone={FillerAdjust(ARRPercentageDone)}>
            {ARRPercentageDone}%
          </Filler>
        </Track>
        HW
        <Track>
          <Filler percentageDone={FillerAdjust(HWPercentageDone)}>
            {HWPercentageDone}%
          </Filler>
        </Track>
        SB
        <Track>
          <Filler percentageDone={FillerAdjust(SBPercentageDone)}>
            {SBPercentageDone}%
          </Filler>
        </Track>
        ShB
        <Track>
          <Filler percentageDone={FillerAdjust(ShBPercentageDone)}>
            {ShBPercentageDone}%
          </Filler>
        </Track>
      </ExpBarContainer>
      <MainTrackWrapper>
        <Track>
          <Filler percentageDone={percentageDone} />
        </Track>
        <h3>{percentageDone}% Complete</h3>
      </MainTrackWrapper>
    </ProgressBarContainer>
  );
};

export default Progress;
