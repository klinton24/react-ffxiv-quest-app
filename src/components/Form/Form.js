import React, { useState } from "react";
import questData from "../../data/questData";

const Form = () => {
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
    setSearchedQuest(e.target.value);
    findMatches(searchedQuest, questData);
    //displayMatches();
  };

  const displayMatches = () => {
    const matchArray = findMatches(searchedQuest, questData);
    console.log(matchArray);
    matchArray.map((quest) => {});
  };

  return (
    <div>
      <p>The searched quest is {searchedQuest} </p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Form;
