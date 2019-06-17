import React from "react";
import CorrectAnswer from "./CorrectAnswer";

const HutButton = ({correctAnswer}) => {
    console.log(correctAnswer);

    const answerSelection = (answer) => {
        if(answer === correctAnswer){
            console.log("Correcto Answero");
            return (
                <CorrectAnswer>Correct Answer</CorrectAnswer>
            );
            
        } else {
            console.log("Wrong Answer");
        }
    }
    
    return (
        <div>
            <button onClick={() => {answerSelection('hut')}} className="hut-button">
                HUT
            </button>
        </div>

    )
};

export default HutButton; 

