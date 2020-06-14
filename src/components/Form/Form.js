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

  const handleChange = (e) => {
    e.preventDefault();
    setSearchedQuest((state) => {
      state = searchedInput;
      return state;
    });
    findMatches(searchedQuest, questData);
    //displayMatches();
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Form;
