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

const Progress = ({ percentageDone }) => {
  return (
    <Track>
      <Filler percentageDone={percentageDone} />
    </Track>
  );
};

export default Progress;
