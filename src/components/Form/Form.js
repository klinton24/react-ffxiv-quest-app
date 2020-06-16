import React, { useState, useRef } from "react";
import questData from "../../data/questData";

const Form = () => {
  const searchedInput = useRef();
  const [searchedQuest, setSearchedQuest] = useState("");
  //const [selectedQuest, setSelectedQuest] = useState("");
  const findMatches = (searchedQuest, questData) => {
    return questData.filter((quest) => {
      // here matches the quest to what is being searched
      const regex = new RegExp(searchedQuest, "gi");
      return quest.questName.match(regex);
    });
  };

  setSearchedQuest((state) => {
    state = searchedInput;
    return state;
  });

  const handleChange = (e) => {
    e.preventDefault();
    findMatches(searchedQuest, questData);
    displayMatches();
  };

  const displayMatches = () => {
    const matchArray = findMatches(searchedQuest, questData);
    console.log(searchedQuest);
    /*
    matchArray.map((quest) => {
      const regex = new RegExp(searchedInput, "gi");
      const questName = questData.questName.replace(
        regex,
        <span>{searchedInput}</span>
      );
      return questName;
    });
    */
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Form;
