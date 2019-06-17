import React from "react";
import HutButton from "./HutButton";
import NutButton from "./NutButton";

const GameAnswer = ({correctAnswer}) => {
    
    
  
    return (
      <div className="game-buttons">
        <HutButton correctAnswer={correctAnswer} />
        <NutButton correctAnswer={correctAnswer} />
      </div>
    );
};

export default GameAnswer;
