import React, { useState } from "react";
import questData from "../../data/questData";
import Quest from "../Quest/Quest";

const Form = () => {
  const [searchedQuest, setSearchedQuest] = useState("");
  const [matchedQuests, setMatchedQuests] = useState([]);
  const [selectedQuest, setSelectedQuest] = useState("");
  const findMatches = (searchedQuest, questData) => {
    return questData.filter((quest) => {
      // here matches the quest to what is being searched
      const regex = new RegExp(searchedQuest, "gi");
      return quest.questName.match(regex);
    });
  };

  const handleChange = (e) => {
    setSearchedQuest(e.target.value);
    setMatchedQuests(findMatches(searchedQuest, questData));
    //displayMatches();
  };

  return (
    <div>
      <p>{selectedQuest.questName}</p>
      <p>The searched quest is {searchedQuest} </p>
      <input type="text" onChange={handleChange} />
      <ul>
        {matchedQuests.map((quest) => (
          <Quest
            questName={quest.questName}
            key={quest.id}
            onClick={() => setSelectedQuest(quest)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Form;
