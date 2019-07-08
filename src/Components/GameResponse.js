import React from "react";
import CorrectAnswerMessage from "./CorrectAnswerMessage";

const GameResponse = ({ onRestart, response }) => {
  console.log(response); 

  if (response === true) {
    return (
      <div>
        <div>
          <CorrectAnswerMessage />
        </div>
        <div className="restart-game_button-container">
          <button
            onClick={() => {
              onRestart(true);
            }}
          >
            YES
          </button>
          <button onClick={() => {}}>NO</button>
        </div>
      </div>
    );
  } else if (response === false){
    return (
      <div className="restart-game_button-container">wrong answer</div>
    );
  }
};

export default GameResponse;
