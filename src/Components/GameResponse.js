import React from 'react';

const GameResponse = ({response,onRestart}) => {

    const setRandomMessage = () => {
        const messageList = ["Nice Work, Play Again?","You're so smrt. Play Again?", "Right Arm! Uno Mas?"];

        return messageList[Math.floor(Math.random() * messageList.length)];
    }

    if(response === false){
        return (
            <div>
                Incorrect!
            </div>
        )
    }

    return (
      <div className="game-response">
        <div className="restart-game_restart-message">
            <h2>{setRandomMessage()}</h2>
        </div>
        <div className="restart-game_button-container">
            <button
                onClick={() => {
                onRestart(true);
                }}
            >
            YES
            </button>
            <button
                onClick={() => {
                onRestart(false);
                }}
            >
            NO
            </button>
        </div>
      </div>
    );
}   


export default GameResponse;