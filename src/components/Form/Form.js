import React, { useState } from "react";
import QuestData from "../../data/QuestData";

const Form = () => {
  const [selectedQuest, setSelectedQuest] = useState("");

  const updateSearch = (e) => {
    setSelectedQuest({ search: e.target.value.substr(0, 20) });
    return;
  };

  const findMatches = (wordToMatch, QuestData) => {
    return QuestData.filter((quest) => {
      // here matches the quest to what is being searched
      const regex = new RegExp(wordToMatch, "gi");
      return QuestData.questName.match(regex);
    });
  };

  const displayQInfo = (questNumber) => {
    return (
      <ul>
        <li>
          MSQ Competion Rate:
          {((selectedQuest.questNumber / 628) * 100).toFixed(2)}%
        </li>
        <li>Quest Giver: {selectedQuest.questGiver}</li>
        <li>It was introduced in patch: {selectedQuest.patch}.</li>;
      </ul>
    );
  };

  const displayMatches = () => {
    const matchArray = findMatches(this.value, QuestData);
    const html = matchArray.map((quest) => {
      const regex = new RegExp(this.value, "gi");
      const questName = QuestData.questName.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
    });
  };

  return (
    <div>
      <input type="text" value={selectedQuest} onChange={updateSearch} />
      <li>
        <a class="Name" href="#" onclick="displayQInfo(${quest.questNumber})">
          {QuestData.questName}
        </a>
      </li>
    </div>
  );
};

export default Form;
