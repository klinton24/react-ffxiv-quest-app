import React, { useState, useEffect } from "react";
import questData from "../../data/questData";
import Quest from "../Quest/Quest";
import { QuestList } from "../../styles";

const Form = ({ setQuestPercentage }) => {
  const [searchedQuest, setSearchedQuest] = useState("");
  const [matchedQuests, setMatchedQuests] = useState([]);
  const [selectedQuest, setSelectedQuest] = useState(undefined);

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

  useEffect(() => {
    if (selectedQuest) {
      setQuestPercentage(selectedQuest.questNumber);
    }
  }, [selectedQuest, setQuestPercentage]);

  return (
    <div>
      <p>The searched quest is {searchedQuest} </p>
      <input type="text" onChange={handleChange} onKeyUp={handleChange} />
      <QuestList>
        {matchedQuests.map((quest) => (
          <Quest
            questName={quest.questName}
            key={quest.id}
            onClick={() => setSelectedQuest(quest)}
          />
        ))}
      </QuestList>
    </div>
  );
};

export default Form;
