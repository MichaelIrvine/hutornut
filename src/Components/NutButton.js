import React from "react";

const NutButton = ({correctAnswer}) => {

    const answerSelection = answer => {
      if (answer === correctAnswer) {
        console.log("Correcto Answero");
      } else {
        console.log("Wrong Answer");
      }
    };

  return (
    <div>
        <button onClick={() => {answerSelection('nut')}}  className="nut-button">
          NUT
        </button>
    </div>
  );
};

export default NutButton;
