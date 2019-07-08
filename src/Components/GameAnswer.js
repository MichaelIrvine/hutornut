import React from "react";


const GameAnswer = ({ correctAnswer, onResponse }) => {
  const handleAnswer = answer => {
    if (answer === correctAnswer) {
      console.log("correct");
      onResponse(true);
    } else {
      console.log("incorrect");
      onResponse(false);
    }
  };

  return (
    <div className="game-buttons">
      <button onClick={() => handleAnswer("hut")}>Hut</button>
      <button onClick={() => handleAnswer("nut")}>Nut</button>
    </div>
  );
};

export default GameAnswer;
