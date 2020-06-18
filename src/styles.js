import styled from "styled-components";

//Start of App Styled Components
export const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
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

export const ImgBackgroundGrid = styled.div`
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

export const GridImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  align-items: center;
`;

//Start of Progress Styled Components
export const Track = styled.div`
  width: 100%;
  height: 20px;
  background-color: #222;
  border-radius: 15px;
  box-shadow: inset 0 0 5px #000;
`;

export const Filler = styled.div`
  width: ${(props) => props.percentageDone}%;
  height: 100%;
  background-color: #66cc00;
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
`;

export const ProgressBarContainer = styled.div`
  width: 80%;
`;

export const ExpBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
  flex-direction: row;
  width: 100%;
  padding-left: 15%;
`;

export const MainTrackWrapper = styled.div`
  justify-content: center;
  margin-left: 25%;
`;

//Start of Form Styled Components
export const QuestList = styled.ul``;
