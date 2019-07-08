import React from "react";

const CorrectAnswerMessage = () => {

    const setCorrectAnswerMessage = () => {
      const messageList = [
        "Nice Work, Play Again?",
        "You're so smrt. Play Again?",
        "Right Arm! Uno Mas?"
      ];

      return messageList[Math.floor(Math.random() * messageList.length)];
    };
  


  return (
    <div className="restart-game_restart-message">
      <h2>{setCorrectAnswerMessage()}</h2>
    </div>
  );
};

export default CorrectAnswerMessage;
