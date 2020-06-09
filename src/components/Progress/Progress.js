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
  flex-direction: row;
  width: 100%;
  padding-left: 15%;
  color: white;
`;

const MainTrackWrapper = styled.div`
  justify-content: center;
  margin-left: 25%;
`;

const Progress = ({ percentageDone }) => {
  return (
    <ProgressBarContainer>
      <ExpBarContainer>
        <Track>A Realm Reborn</Track>
        <Track>Heavensward</Track>
        <Track>Stormblood</Track>
        <Track>Shadowbringers</Track>
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
