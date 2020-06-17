import React from "react";

const Quest = ({ questName, onClick }) => {
  //TODO const displayQInfo = () => {};

  return <li onClick={onClick}>{questName}</li>;
};

export default Quest;
