import React from "react";
import styled from "styled-components";

const Track = styled.div`
  width: 100%;
  height: 20px;
  background-color: #222;
  border-radius: 15px;
  box-shadow: inset 0 0 5px #000;
`;

const Filler = styled.div`
  width: ${(props) => props.percentageDone}%;
  height: 100%;
  background-color: #66cc00;
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
`;

const ProgressBarContainer = styled.div`
  width: 80%;
`;

const ExpBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
  flex-direction: row;
  width: 100%;
  padding-left: 15%;
`;

const MainTrackWrapper = styled.div`
  justify-content: center;
  margin-left: 25%;
`;

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
          <Filler percentageDone={ARRPercentageDone}>
            {ARRPercentageDone}%
          </Filler>
        </Track>
        HW
        <Track>
          <Filler percentageDone={HWPercentageDone}>{HWPercentageDone}%</Filler>
        </Track>
        SB
        <Track>
          <Filler percentageDone={SBPercentageDone}>{SBPercentageDone}%</Filler>
        </Track>
        ShB
        <Track>
          <Filler percentageDone={ShBPercentageDone} />
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
